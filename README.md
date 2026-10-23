# Chat LLM UI

This is a [Next.js](https://nextjs.org) project built with React, providing a modern UI for interacting with LLM (Large Language Model) chat APIs.

## Getting Started

### 1. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 3. Project Structure

- `src/app/` — Main Next.js app directory (pages, layouts, components)
- `src/app/components/` — Reusable React components (Header, Footer, etc.)
- `src/app/dashboard/` — Dashboard and related pages
- `src/app/hooks/` — Custom React hooks
- `src/lib/` — Utility libraries (e.g., chat manager)
- `src/store/` — Redux store and slices
- `src/utils/` — Utility functions
- `public/` — Static assets (SVGs, images)

### 4. Editing Pages

You can start editing the main page by modifying `src/app/page.tsx`. The app supports hot reloading for rapid development.

## Features

- Built with [Next.js App Router](https://nextjs.org/docs/app)
- Modern React (functional components, hooks)
- Modular folder structure
- API routes for chat and model management
- Custom authentication and model list hooks
- Optimized font loading with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


### Deployment steps

- Run the build 

```bash
npm run build
```

- Running code in linux environment

```
cd projects
rm -rf chat-llm-ui
unzip chat-llm-ui.zip
cd chat-llm-ui
npm i --legacy-peer-deps
npm run build
pm2 restart chat-llm-app
```