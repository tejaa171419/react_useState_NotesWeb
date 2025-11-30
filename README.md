# Notes App

A simple and intuitive note-taking application built with React and Vite. This app allows users to create, view, and delete notes with a clean and responsive interface.

![Notes App Demo](public/demo.png) <!-- Add a screenshot of your app here -->

## Features

- Create new notes with titles and details
- View all created notes in a visually appealing layout
- Delete notes by clicking the close icon
- Responsive design that works on both desktop and mobile devices
- Built with modern web technologies

## Tech Stack

- **React 19** - For building the user interface
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - For styling and responsive design
- **Lucide React** - For beautiful icons

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd notes_app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Previews the production build locally

## Project Structure

```
notes_app/
├── src/
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── public/           # Static assets
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies and scripts
```

## How It Works

1. Enter a title and details for your note in the form on the left side
2. Click "Add Notes" to create and save your note
3. Your new note will appear in the "Recent Notes" section on the right
4. To delete a note, click the red X icon in the top-right corner of any note

## Customization

You can customize the app by:

- Modifying the styles in `src/index.css`
- Changing the component structure in `src/App.jsx`
- Updating the Tailwind configuration
- Adding new features like note editing, persistence, or categorization

## Deployment

To deploy the app to production:

1. Build the app:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory, which you can deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

## License

This project is licensed under the MIT License.

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)