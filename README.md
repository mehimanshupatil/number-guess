# Mind Reader Game 🧠

A fascinating number guessing game that uses binary mathematics to "read your mind"! Think of any number between 1-100, and the game will guess it correctly every time.

## 🎮 How It Works

1. **Think of a number** between 1 and 100
2. **Answer 7 questions** - for each sheet of numbers shown, simply answer "Yes" if your number appears on that sheet, or "No" if it doesn't
3. **Watch the magic happen** - the game will reveal your exact number!

## ✨ Features

- **Beautiful, modern UI** with smooth animations and transitions
- **Dark/Light mode toggle** with dark mode as default
- **Fully responsive design** that works on all devices
- **Progressive web app ready** with proper meta tags
- **Accessible interface** with clear visual feedback
- **Binary mathematics engine** that powers the number guessing logic

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for beautiful icons
- **Context API** for theme management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mind-reader-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Game Logic

The game uses binary representation to determine which numbers appear on each sheet:

- **Sheet 1**: Numbers where the 1st bit is 1 (1, 3, 5, 7, 9, 11, ...)
- **Sheet 2**: Numbers where the 2nd bit is 1 (2, 3, 6, 7, 10, 11, ...)
- **Sheet 3**: Numbers where the 3rd bit is 1 (4, 5, 6, 7, 12, 13, ...)
- And so on...

When you answer "Yes" to a sheet, we add that sheet's binary value to our total. The sum of all "Yes" sheets equals your chosen number!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Design Philosophy

The game features a clean, modern design with:
- Gradient backgrounds and glassmorphism effects
- Smooth animations and micro-interactions
- Intuitive user interface
- Accessibility-first approach
- Mobile-responsive layout

---

**Enjoy the mind-reading experience!** 🎭✨