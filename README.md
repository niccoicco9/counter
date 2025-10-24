# Counter App

A simple React counter application built with Vite and TypeScript, featuring Chuck Norris API integration.

## Features

- **Counter Functionality**: Increment and reset buttons
- **Visual Feedback**: Different colors for buttons in normal and pressed states
- **Zero State**: Special color when counter is at zero
- **Animations**: Smooth bounce animation when counter changes
- **Status Indicator**: Shows current counter state
- **Chuck Norris API Integration**: Fetches random jokes on each increment
- **Joke Display**: Beautiful gradient container for displaying jokes
- **Loading States**: Button shows loading state while fetching jokes
- **Accessibility**: ARIA labels and screen reader support
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
✅ API Integration: Chuck Norris jokes on increment  
✅ Text element with specific CSS styling for jokes  

## API Integration

The app integrates with the Chuck Norris API (https://api.chucknorris.io/) to fetch random jokes when the increment button is clicked. The API response is parsed to extract the joke text from the "value" field.

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
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking

## Styling

The app includes custom CSS with:
- **Increment Button**: Blue color scheme with hover and active states
- **Reset Button**: Orange color scheme with hover and active states
- **Counter Display**: Red when at 0, green when above 0
- **Joke Container**: Beautiful gradient background with custom typography
- **Responsive Design**: Mobile-friendly layout

## Technologies Used

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7
- CSS3 with custom styling
- Chuck Norris API integration

## License

This project is licensed under the MIT License.