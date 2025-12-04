let display = document.getElementById("display");

function press(num){
    display.value += num;
}

function clearDisplay(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let result = eval(display.value);
        display.value = result;
        speak("The result is " + result);
    }
    catch{
        display.value = "Error";
        speak("Error");
    }
}

function startListening(){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event){
        let voice = event.results[0][0].transcript.toLowerCase();

        voice = voice.replace("plus", "+")
                     .replace("minus", "-")
                     .replace("into", "*")
                     .replace("multiply", "*")
                     .replace("x", "*")
                     .replace("divide", "/")
                     .replace("divided by", "/");

        display.value = voice;

        try {
            let result = eval(voice);
            display.value = result;
            speak("The result is " + result);
        } catch {
            display.value = "Error";
            speak("Error");
        }
    }
}

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}
