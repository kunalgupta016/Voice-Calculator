const display = document.getElementById("display");
const HISTORY_KEY = "voiceCalcHistory_v1";
let history = [];
const maxHistoryLength = 10;
let isHistoryOpen = false;

window.addEventListener("load", () => {
  loadHistoryFromStorage();
});

function press(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;

    if (!expression.trim()) return;

    const result = evaluateExpression(expression);

    display.value = result;

    saveHistory(expression, result);
    renderHistory();

    speak("Result is " + result);
  } catch (err) {
    console.error(err);
    display.value = "Error";
    speak("Error");
  }
}

function evaluateExpression(expr) {
  let cleanExpr = expr.replace(/×/g, "*").replace(/÷/g, "/");

  if (cleanExpr.includes("=") && /x/.test(cleanExpr)) {
    const solution = solveEquationForX(cleanExpr);
    if (isNaN(solution)) throw new Error("No solution");
    return "x = " + Number(solution.toFixed(4));
  }

  const value = math.evaluate(cleanExpr);
  return value;
}

function solveEquationForX(equation) {
  const parts = equation.split("=");
  if (parts.length !== 2) throw new Error("Invalid equation");

  const left = parts[0];
  const right = parts[1];

  function f(x) {
    return math.evaluate(left, { x: x }) - math.evaluate(right, { x: x });
  }

  let x = 0;
  for (let i = 0; i < 40; i++) {
    const y = f(x);
    const h = 1e-6;
    const dy = (f(x + h) - f(x - h)) / (2 * h);
    if (Math.abs(dy) < 1e-10) break;
    const x1 = x - y / dy;
    if (Math.abs(x1 - x) < 1e-7) {
      x = x1;
      break;
    }
    x = x1;
  }
  return x;
}

function saveHistory(expression, result) {
  history.push({ expression, result });

  if (history.length > maxHistoryLength) {
    history.shift();
  }

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function loadHistoryFromStorage() {
  const stored = localStorage.getItem(HISTORY_KEY);
  if (stored) {
    try {
      history = JSON.parse(stored) || [];
    } catch (e) {
      history = [];
    }
  }
  renderHistory();
}

function renderHistory() {
  const historyPanel = document.getElementById("historyPanel");
  historyPanel.innerHTML = "";

  const reversed = [...history].reverse();

  reversed.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "bg-white/15 px-3 py-2 rounded-xl cursor-pointer hover:bg-white/25 transition";

    li.innerText = `${item.expression} => ${item.result}`;

    li.onclick = () => {
      display.value = item.expression;
    };

    historyPanel.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function toggleHistory() {
  const panel = document.getElementById("historyWrapper");
  isHistoryOpen = !isHistoryOpen;

  if (isHistoryOpen) {
    panel.classList.remove("translate-x-full", "opacity-0");
    panel.classList.add("translate-x-0", "opacity-100");
  } else {
    panel.classList.add("translate-x-full", "opacity-0");
    panel.classList.remove("translate-x-0", "opacity-100");
  }
}

function startListening() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript;
    console.log("Raw voice:", transcript);

    const expr = speechToMath(transcript);
    console.log("Parsed expr:", expr);

    display.value = expr;

    try {
      const result = evaluateExpression(expr);
      display.value = result;

      saveHistory(expr, result);
      renderHistory();

      speak("Result is " + result);
    } catch (err) {
      console.error(err);
      display.value = "Error";
      speak("Error");
    }
  };
}



const hindiNumbers = {
  "shunya": 0,
  "ek": 1,
  "do": 2,
  "teen": 3,
  "char": 4,
  "paanch": 5,
  "chhe": 6,
  "saat": 7,
  "aath": 8,
  "nau": 9,
  "das": 10,
  "gyarah": 11,
  "barah": 12
};


const hindiMultipliers = {
  "sau": 100,
  "hazaar": 1000,
  "laakh": 100000,
  "crore": 10000000
};


function hindiWordsToNumber(text) {
  let words = text.split(" ");
  let result = [];
  let temp = 0;

  words.forEach(word => {
    if (hindiNumbers[word] !== undefined) {
      temp += hindiNumbers[word];
    } 
    else if (hindiMultipliers[word]) {
      if (temp === 0) temp = 1;
      temp *= hindiMultipliers[word];
    } 
    else {
      if (temp !== 0) {
        result.push(temp);
        temp = 0;
      }
      result.push(word);
    }
  });

  if (temp !== 0) {
    result.push(temp);
  }

  return result.join(" ");
}


function speechToMath(text) {
  let exp = text.toLowerCase();
  exp = hindiWordsToNumber(exp);
  const replacements = [
    ["divided by", "/"],
    ["divide by", "/"],
    ["multiplied by", "*"],
    ["multiply by", "*"],
    ["to the power", "^"],
    ["open bracket", "("],
    ["close bracket", ")"],
    ["bracket open", "("],
    ["bracket close", ")"],
    ["bracket khol", "("],
    ["bracket band", ")"],
    ["equal to", "="],
    ["is equal to", "="],
    ["barabar", "="],

    ["plus", "+"],
    ["add", "+"],
    ["jod", "+"],
    ["jodo", "+"],
    ["minus", "-"],
    ["subtract", "-"],
    ["ghata", "-"],
    ["ghatao", "-"],
    ["into", "*"],
    ["guna", "*"],
    ["gunna", "*"],
    ["divide", "/"],
    ["bhag", "/"],
    ["bate", "/"],
    ["baant", "/"],
    ["point", "."],
    ["dot", "."],

    ["power", "^"],
  ];

  replacements.forEach(([word, symbol]) => {
    const regex = new RegExp("\\b" + word + "\\b", "g");
    exp = exp.replace(regex, " " + symbol + " ");
  });

  exp = exp.replace(/\s+/g, " ").trim();
  return exp;
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}
