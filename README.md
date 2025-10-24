# Counter App

A simple React counter application built with Vite and TypeScript.

## Features

- **Counter Functionality**: Increment and reset buttons
- **Visual Feedback**: Different colors for buttons in normal and pressed states
- **Zero State**: Special color when counter is at zero
- **Responsive Design**: Works on desktop and mobile devices

## Requirements Met

✅ Button with label "Increment"  
✅ Button with label "Reset"  
✅ Number prefixed by "Counter:"  
✅ Initial value set to 0  
✅ Increment increases counter by 1  
✅ Reset resets counter to 0  
✅ Different colors for buttons in normal and pressed states  
✅ Different color for counter when it's 0  

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd counter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Styling

The app includes custom CSS with:
- **Increment Button**: Blue color scheme with hover and active states
- **Reset Button**: Orange color scheme with hover and active states
- **Counter Display**: Red when at 0, green when above 0
- **Responsive Design**: Mobile-friendly layout

## Technologies Used

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7
- CSS3 with custom styling

## License

This project is licensed under the MIT License.