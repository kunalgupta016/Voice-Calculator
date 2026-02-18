# Voice Calculator 🎤🧮

A modern, feature-rich voice-enabled calculator with glassmorphism design, Hindi & English language support, algebraic equation solving, and calculation history tracking.

## Features ✨

- **🎤 Voice Input Recognition**: Speak your calculations in English or Hindi and get instant results
- **📐 Advanced Calculator**: Standard arithmetic operations (addition, subtraction, multiplication, division, modulo)
- **📊 Equation Solver**: Solve complex algebraic equations with mathematical expressions
- **🎨 Glassmorphism Design**: Beautiful modern UI with glass-effect styling and smooth animations
- **📜 Calculation History**: Automatically stores and displays your calculation history
- **🌐 Multi-language Support**: Hindi and English voice recognition
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Real-time Display**: See your input and results instantly

## Demo

Check out the live demo: [voicecalc.vercel.app](https://voicecalc.vercel.app/)

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS for modern, responsive design
- **Math Engine**: [math.js](https://mathjs.org/) v15.0.0 for advanced calculations
- **Voice Recognition**: Web Speech API
- **Deployment**: Vercel

## Installation & Setup

### Prerequisites
- Modern web browser with Web Speech API support (Chrome, Edge, Firefox, Safari)
- Internet connection for CDN resources

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunalgupta016/Voice-Calculator.git
   cd Voice-Calculator
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies to install needed!

## How to Use

### Using the Keyboard
1. Click on number buttons to input digits
2. Click operator buttons (+, -, ×, ÷, %, ^) for operations
3. Click `(` `)` for parentheses and complex expressions
4. Press `=` to calculate the result
5. Press `C` to clear the display
6. Press `⌫` to delete the last character

### Using Voice Commands 🎤
1. Click the **🎤 microphone button** to start voice input
2. Speak your calculation (e.g., "five plus three", "10 divided by 2")
3. The calculator processes your voice input and shows the result
4. Works in both English and Hindi

### Calculation History
- Click **📜 History** button to view previous calculations
- History is automatically saved in local storage
- Click **Clear** to remove all history entries

## File Structure

```
Voice-Calculator/
├── index.html      # Main HTML file with UI structure
├── style.css       # Custom CSS styling
├── script.js       # JavaScript logic and functionality
├── favicon.ico     # Browser favicon
├── preview.png     # Project preview image
└── README.md       # This file
```

## Features in Detail

### Calculator Operations
- **Basic Arithmetic**: +, −, ×, ÷
- **Modulo**: % (remainder operation)
- **Power**: ^ (exponentiation)
- **Parentheses**: () for complex expressions
- **Decimal Numbers**: Full support for decimal calculations

### Voice Recognition
- **English**: Support for English number and operation names
- **Hindi**: Support for Hindi number and operation names
- **Smart Recognition**: Handles various speech patterns and accents

### History Management
- **Auto-save**: Calculations automatically added to history
- **Local Storage**: History persists even after closing the browser
- **Clear Option**: Remove individual or all history entries

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full support |
| Edge    | ✅ Full support |
| Firefox | ✅ Full support |
| Safari  | ✅ Full support |
| Opera   | ✅ Full support |

## Dependencies

- **Tailwind CSS**: For responsive styling (loaded via CDN)
- **math.js**: For advanced mathematical computations (loaded via CDN)
- **Web Speech API**: Built-in browser API (no installation needed)

## Project Architecture

### HTML Structure
- Calculator display and button grid
- History sidebar panel
- Microphone button for voice input
- Responsive flex layout for mobile compatibility

### CSS Styling
- Glassmorphism effects with backdrop blur
- Gradient backgrounds with dark theme
- Smooth hover transitions and animations
- Mobile-first responsive design

### JavaScript Functionality
- `press()`: Append characters to display
- `calculate()`: Evaluate mathematical expressions
- `clearDisplay()`: Reset calculator
- `delChar()`: Remove last character
- `startListening()`: Initiate voice recognition
- `toggleHistory()`: Show/hide history panel
- `clearHistory()`: Remove all history

## Example Calculations

### Basic Math
- 5 + 3 = 8
- 10 - 4 = 6
- 7 × 8 = 56
- 20 ÷ 4 = 5

### Advanced Math
- 2^3 = 8 (power operation)
- (10 + 5) × 2 = 30 (with parentheses)
- 17 % 5 = 2 (modulo)
- sqrt(16) = 4 (math functions)

### Voice Input Examples
- "five plus three" → 5 + 3 = 8
- "ten divided by two" → 10 ÷ 2 = 5
- "twenty-five percent of 100" → 100 × 0.25 = 25

## Performance

- **Lightweight**: Minimal CSS and JavaScript
- **Fast Calculations**: Instant results using math.js
- **Low Latency**: Voice recognition processes quickly
- **Efficient Storage**: History stored in browser's local storage

## Customization

You can customize the calculator by:

1. **Colors**: Modify Tailwind classes in `index.html`
2. **Layout**: Adjust grid and spacing in the HTML structure
3. **Functionality**: Extend `script.js` with new features
4. **Styling**: Update `style.css` for custom effects

## Known Limitations

- Voice recognition requires microphone permissions
- Some browsers may have limited Web Speech API support
- Offline functionality requires prior page load (cached resources)
- Complex mathematical functions depend on math.js capabilities

## Future Enhancements

- [ ] Graphing calculator functionality
- [ ] Scientific calculator mode
- [ ] Multiple language support (Spanish, French, etc.)
- [ ] Dark/Light theme toggle
- [ ] Export calculation history
- [ ] Unit conversion tools
- [ ] Programmable calculator mode

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License. See LICENSE file for details.

## Author

**Kunal Gupta** - [GitHub Profile](https://github.com/kunalgupta016)

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - For amazing utility-first CSS framework
- [math.js](https://mathjs.org/) - For powerful mathematical computation library
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - For voice recognition capabilities

## Support & Feedback

If you have any questions, suggestions, or issues:
- Open an issue on [GitHub Issues](https://github.com/kunalgupta016/Voice-Calculator/issues)
- Reach out via [GitHub Discussions](https://github.com/kunalgupta016/Voice-Calculator/discussions)

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!