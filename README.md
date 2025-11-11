# Veritas Shield

An AI-powered web application designed to detect disinformation in text and news articles. Veritas Shield helps users verify the credibility of information and combat fake news through intelligent text analysis.

## Features

- **AI-Powered Analysis**: Utilizes advanced AI to analyze text and detect potential disinformation
- **Interactive Chat Interface**: User-friendly chatbox for submitting text and receiving analysis
- **User Authentication**: Secure login and registration system
- **Subscription Management**: Premium subscription options for enhanced features
- **Responsive Design**: Modern UI built with Tailwind CSS for all device sizes

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with PostCSS
- **Language**: TypeScript

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd veritas-shield-main
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
veritas-shield-main/
├── src/
│   ├── api/
│   │   └── chat.ts           # API integration for chat functionality
│   ├── components/
│   │   ├── AboutPage.tsx      # About page component
│   │   ├── Chatbox.tsx        # Main chat interface
│   │   ├── LoginPage.tsx      # User login page
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── RegisterPage.tsx   # User registration page
│   │   └── SubscriptionPage.tsx # Subscription management
│   ├── pages/
│   │   ├── Dashboard.tsx      # User dashboard
│   │   └── Home.tsx           # Home page
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## Available Routes

- `/` - Home page with chat interface
- `/about` - Information about Veritas Shield
- `/subscription` - Subscription plans and management
- `/login` - User login
- `/register` - New user registration

## Configuration

### Vite Configuration

The project uses Vite as the build tool with the following default settings:
- Development server runs on port 5173
- React plugin enabled for JSX/TSX support

### Tailwind CSS

Tailwind CSS is configured for utility-first styling. Customize the theme in `tailwind.config.js`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ to combat disinformation and promote truth.
