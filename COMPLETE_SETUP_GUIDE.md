# Complete React + Vite Setup Guide

## 📖 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Building & Deployment](#building--deployment)
6. [Troubleshooting](#troubleshooting)
7. [Adding Features](#adding-features)

---

## Prerequisites

### System Requirements

- **Node.js**: v14 or higher
- **npm**: v6 or higher (comes with Node.js)
- **Git**: for version control
- **Code Editor**: VS Code, Sublime, etc.

### Check Your Setup

```bash
node --version  # Should be v14+
npm --version   # Should be v6+
git --version   # Should be installed
```

**If not installed:**
- Download Node.js from https://nodejs.org/ (includes npm)
- Download Git from https://git-scm.com/

---

## Initial Setup

### Step 1: Install Dependencies

```bash
npm install
```

**What gets installed:**
- `react` (18.3.1) - React library
- `react-dom` (18.3.1) - React DOM rendering
- `vite` (5.0.8) - Build tool
- `@vitejs/plugin-react` (4.2.1) - React support for Vite

**Output:**
```
added 150 packages in 2m45s
```

**⏱️ Duration:** 2-3 minutes (slower on first install)

---

### Step 2: Start Development Server

```bash
npm run dev
```

**What happens:**
1. Vite starts on port 3000
2. Browser opens automatically
3. Hot Module Replacement enabled (live reload)
4. Ready for development!

**Output:**
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Step 3: Edit Your First File

Open `src/App.jsx` and change the button text:

**Before:**
```jsx
<button onClick={() => setCount(count + 1)}>
  Count is {count}
</button>
```

**After:**
```jsx
<button onClick={() => setCount(count + 1)}>
  🎉 Clicks: {count}
</button>
```

**Save the file (Ctrl+S)**

✨ The browser updates instantly - no page reload needed!

---

## Project Structure

```
react-ci-cd/
├── index.html              ← Entry HTML file
├── package.json            ← Dependencies & scripts
├── package-lock.json       ← Dependency lock file
├── vite.config.js          ← Vite configuration
├── COMMANDS.md             ← Command reference
├── COMPLETE_SETUP_GUIDE.md ← This file
│
├── src/
│   ├── main.jsx            ← App initialization
│   ├── App.jsx             ← Main component
│   ├── App.css             ← Component styles
│   └── index.css           ← Global styles
│
├── dist/                   ← Production build (created by npm run build)
│   ├── index.html
│   └── assets/
│       ├── main-xxxxx.js
│       └── main-xxxxx.css
│
├── node_modules/           ← All installed packages
└── .gitignore              ← Git ignore rules
```

### Key Files Explained

**index.html**
- Main HTML file - entry point for the browser
- Contains `<div id="root"></div>` where React mounts
- Loads `src/main.jsx` as the main script

**vite.config.js**
- Configuration for Vite build tool
- Enables React plugin
- Sets port to 3000
- Enables auto browser open

**src/main.jsx**
- Initializes React application
- Mounts React app to `#root` element
- Wraps app in `React.StrictMode` for development checks

**src/App.jsx**
- Main React component
- Contains the counter example
- Shows state management with `useState`

**package.json**
- Project metadata (name, version)
- Lists all dependencies
- Defines npm scripts (dev, build, preview)

---

## Development Workflow

### Daily Development Loop

#### 1. Start Dev Server
```bash
npm run dev
```

#### 2. Edit Files

Edit any file in the `src/` folder:
- `src/App.jsx`
- `src/App.css`
- `src/index.css`
- Create new components in `src/`

#### 3. See Changes Instantly

HMR (Hot Module Replacement) automatically updates your browser:
- ✅ Code changes reflect instantly
- ✅ Component state is preserved
- ✅ No full page reload needed
- ✅ Faster development experience

#### 4. Fix Errors

If you make a syntax error:
- Check the browser console (F12)
- Fix error in code editor
- Save file
- Error disappears automatically

#### 5. Stop Dev Server

When done developing:
```bash
# Press Ctrl+C (Windows/Linux) or Cmd+C (Mac)
```

### Example: Add a New Component

**Create `src/Welcome.jsx`:**
```jsx
function Welcome() {
  return (
    <div className="welcome">
      <h2>Welcome to React!</h2>
      <p>This is a new component</p>
    </div>
  )
}

export default Welcome
```

**Update `src/App.jsx`:**
```jsx
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Welcome />
      {/* rest of component */}
    </div>
  )
}
```

**Save both files** → Browser updates automatically! ✨

---

## Building & Deployment

### Production Build

#### Step 1: Build
```bash
npm run build
```

**What happens:**
1. Minifies and optimizes all code
2. Tree-shakes unused code
3. Creates hashed filenames (cache-busting)
4. Outputs optimized files to `dist/` folder
5. Generates source maps for debugging

**Output:**
```
vite v5.0.8 building for production...
✓ 12 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.30 kB
dist/assets/main-xxxxx.js          1.23 kB │ gzip:  0.67 kB
dist/assets/main-xxxxx.css         0.89 kB │ gzip:  0.45 kB
```

**⏱️ Duration:** 10-30 seconds

#### Step 2: Test Production Build Locally
```bash
npm run preview
```

This serves the production build from `dist/` folder at http://localhost:4173/

**Why test locally?**
- Verify everything works in production
- Check for console errors
- Test on slower network conditions
- Ensure all assets load properly

#### Step 3: Deploy to Production

**Option A: Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```
- Automatic deploys on push to GitHub
- Free SSL/HTTPS
- Automatic rollbacks

**Option B: Netlify**
- Upload `dist/` folder through web UI
- Or connect GitHub for auto-deploys

**Option C: Traditional Server**
- Build locally: `npm run build`
- Upload `dist/` folder to server
- Configure web server to serve SPA

**Option D: GitHub Pages**
- Build locally: `npm run build`
- Push `dist/` folder to `gh-pages` branch
- Enable GitHub Pages in repository settings

---

## Troubleshooting

### Issue 1: Port 3000 Already in Use

**Error:**
```
listen EADDRINUSE: address already in use :::3000
```

**Solution A: Kill Process on Port 3000**

On Mac/Linux:
```bash
lsof -ti:3000 | xargs kill -9
```

On Windows (PowerShell):
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

**Solution B: Change Port in `vite.config.js`**
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001  // Use 3001 instead of 3000
  }
})
```

Then restart: `npm run dev`

---

### Issue 2: npm install Takes Forever

**Solutions:**

```bash
# Try clearing cache
npm cache clean --force

# Try different registry
npm install --registry https://registry.npmjs.org/

# Or use npm ci (cleaner install)
npm ci
```

---

### Issue 3: Changes Not Showing in Browser

**Solutions:**

1. **Check dev server is running:**
   ```bash
   npm run dev
   ```

2. **Hard refresh browser:**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

3. **Check for errors:**
   - Press F12 to open DevTools
   - Check console for error messages

4. **Restart dev server:**
   - Press Ctrl+C to stop
   - Run `npm run dev` again

---

### Issue 4: Build Fails

**Solutions:**

```bash
# Clean build
rm -rf dist
npm run build

# Check for syntax errors
npm run build -- --debug

# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

---

### Issue 5: Module Not Found Error

**Common causes:**
- Wrong file path (case-sensitive on Linux/Mac)
- Missing file extension
- Typo in import statement

**Solutions:**

✅ Correct:
```jsx
import App from './App.jsx'
import { useState } from 'react'
```

❌ Incorrect:
```jsx
import App from './app'  // Wrong case
import { useState } from 'React'  // Wrong case
import App from './App'  // Missing .jsx
```

---

## Adding Features

### Add React Router (Multi-page)

```bash
npm install react-router-dom
```

**Update `src/main.jsx`:**
```jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

**Update `src/App.jsx`:**
```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
```

---

### Add Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Update `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Use Tailwind classes:**
```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

---

### Add State Management (Zustand)

```bash
npm install zustand
```

**Create `src/store.js`:**
```javascript
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore
```

**Use in component:**
```jsx
import useStore from './store'

function App() {
  const { count, increment } = useStore()
  return <button onClick={increment}>Count: {count}</button>
}
```

---

### Add Testing (Vitest)

```bash
npm install -D vitest @testing-library/react @testing-library/user-event
```

**Create `src/App.test.jsx`:**
```jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByText(/Count is/)).toBeInTheDocument()
  })
})
```

---

## Quick Reference

| Task | Command | Time |
|------|---------|------|
| Install dependencies | `npm install` | 2-3 min |
| Start dev server | `npm run dev` | Instant |
| Edit files | Edit in `src/` folder | Instant HMR |
| Build production | `npm run build` | 10-30 sec |
| Preview production | `npm run preview` | Instant |
| Deploy to Vercel | `vercel` | 1-2 min |

---

## Resources

- **Vite Documentation**: https://vitejs.dev/guide/
- **React Documentation**: https://react.dev/
- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Zustand**: https://github.com/pmndrs/zustand

---

## Next Steps

1. ✅ Finish this setup
2. 📖 Learn React fundamentals (components, hooks, state)
3. 🛣️ Add routing with React Router
4. 🎨 Style with Tailwind CSS or CSS Modules
5. 🗄️ Add state management if needed
6. ✅ Add testing
7. 🚀 Deploy to production

---

**Happy coding! 🚀**
