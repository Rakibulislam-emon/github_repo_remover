# GitHub Repo Remover - Client

A modern React application that helps users manage and clean up their GitHub repositories with an intuitive interface.

![GitHub Repo Remover Screenshot](screenshot.png)

## Features

- **GitHub OAuth Integration**: Secure authentication with GitHub
- **Repository Management**: View, sort, and filter your GitHub repositories
- **Batch Operations**: Select and delete multiple repositories at once
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: UI updates instantly after operations

## Tech Stack

- **React 19**: Latest version of React for building the UI
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: Promise-based HTTP client
- **React Icons**: Popular icon library

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- GitHub account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-repo-remover.git
   cd github-repo-remover/client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the client directory with the following content:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
client/
├── public/           # Static files
├── src/              # Source files
│   ├── components/   # React components
│   │   ├── auth/     # Authentication components
│   │   ├── layout/   # Layout components
│   │   ├── repos/    # Repository management components
│   │   └── router/   # Routing configuration
│   ├── assets/       # Images, fonts, etc.
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── .eslintrc.js      # ESLint configuration
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js    # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing the API
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

