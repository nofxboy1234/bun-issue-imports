# Project Overview

This is a React project built with Bun. It uses a Bun server to serve the React frontend and provide a simple API. The frontend is built with React and TypeScript, and the backend is a Bun server.

# Building and Running

## Development

To start the development server with hot reloading:

```bash
bun dev
```

## Production

To build the project for production:

```bash
bun build
```

To run the production server:

```bash
bun start
```

# Development Conventions

*   The project uses TypeScript.
*   The project uses the `@/*` path alias for `src/*`.
*   The project uses a Bun server for the backend.
*   The frontend code is in `src/frontend.tsx`.
*   The main React component is `src/App.tsx`.
*   The server entry point is `src/index.tsx`.
