# Component-based UI

A small React application built with Vite that renders three UI widgets from static JSON data:

- Profile — shows a user's avatar, tag, location, and stats
- FriendList — displays a list of friends with online/offline status
- TransactionHistory — renders a table of transactions

This repository is a homework project for the GoIT React course.

## Stack

- Language: JavaScript (ES2020+)
- Framework/Library: React 19
- Bundler/Dev server: Vite 7
- Linting: ESLint 9 with react-hooks and react-refresh plugins
- Module format: ESM ("type": "module")
- Package manager: npm (package-lock.json present)

## Entry points

- index.html — HTML template that loads the app
- src/main.jsx — React root that mounts <App /> into #root
- src/App.jsx — top-level component composing Profile, FriendList, TransactionHistory

## Project structure

```
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ public/
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  ├─ components/
│  │  ├─ Profile/
│  │  │  ├─ Profile.jsx
│  │  │  └─ Profile.module.css
│  │  ├─ FriendList/
│  │  │  ├─ FriendList.jsx
│  │  │  └─ FriendList.module.css
│  │  └─ TransactionHistory/
│  │     ├─ TransactionHistory.jsx
│  │     └─ TransactionHistory.module.css
│  └─ data/
│     ├─ userData.json
│     ├─ friends.json
│     └─ transaction.json
└─ README.md
```

## Requirements

- Node.js 18 or newer (required by modern Vite)
- npm 8+ (ships with Node)

## Setup

1. Install dependencies:
    - npm install
2. Start the development server:
    - npm run dev
    - The terminal will print a local and network URL. Open the local URL in your browser.
3. Lint the code:
    - npm run lint
4. Build for production:
    - npm run build
5. Preview the production build locally:
    - npm run preview

## Available scripts

- dev: vite
- build: vite build
- preview: vite preview
- lint: eslint .

## Environment variables

This project uses Vite. Environment variables must be prefixed with VITE_ to be exposed to the client. You can define
them in one of the standard Vite env files at the project root, for example:

- .env — loaded in all cases
- .env.local — local-only overrides (gitignored)
- .env.development, .env.production — mode-specific

Example:

```
# .env.local
VITE_API_BASE_URL=https://api.example.com
```

Usage in code:

```
const baseUrl = import.meta.env.VITE_API_BASE_URL;
```

Currently, the app renders static JSON and does not require any env vars.

## Data

Static demo data lives in src/data/ and is imported directly by components:

- userData.json — profile info
- friends.json — friend list
- transaction.json — transaction entries

## Testing

There are no automated tests configured in this repository.

- TODO: Set up a test runner (e.g., Vitest + React Testing Library) and add unit tests for components.

## Linting and code style

ESLint is configured via eslint.config.js with recommended rules, React Hooks rules, and Vite React Refresh plugin.

- Run lints: npm run lint

## How it works (overview)

- index.html includes a script type="module" that loads src/main.jsx
- src/main.jsx creates a React root and renders <App />
- src/App.jsx imports JSON data from src/data and renders:
    - <Profile name tag location image stats />
    - <FriendList friends={friends} />
    - <TransactionHistory transactions={transactions} />

## Deployment

Any static host that serves the dist/ folder will work.

- Build: npm run build
- Serve dist/: npm run preview (local) or upload dist/ to your static host (e.g., Netlify, Vercel, GitHub Pages). Vite
  outputs plain static assets.

## License

No license file was found in the repository.

- TODO: Add a LICENSE file (e.g., MIT) and update this section accordingly.

## Acknowledgements

This project was bootstrapped with Vite. The original README content referenced official Vite React plugins; this README
updates it with project-specific details while keeping relevant guidance about the toolchain.
