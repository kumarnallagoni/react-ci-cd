# React + Vite Setup - Step by Step Commands

## 📋 Quick Reference

Here are all the commands you need to get your React + Vite app up and running:

---

## 🚀 STEP 1: Install Dependencies

```bash
npm install
```

**What it does:**
- Downloads all required packages from npm
- Creates `node_modules` folder
- Updates `package-lock.json`

**Expected output:**
```
added 150 packages in 2m45s
```

**Time:** ~2-3 minutes (first time)

---

## 🎯 STEP 2: Start Development Server

```bash
npm run dev
```

**What it does:**
- Starts Vite development server
- Enables Hot Module Replacement (HMR)
- Automatically opens browser at http://localhost:3000
- Watches for file changes

**Expected output:**
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

**To stop:**
- Press `Ctrl + C` (Windows/Linux) or `Cmd + C` (Mac)

---

## 🏗️ STEP 3: Build for Production

```bash
npm run build
```

**What it does:**
- Minifies and optimizes code
- Creates hashed asset files
- Outputs to `dist/` folder
- Generates source maps for debugging

**Expected output:**
```
vite v5.0.8 building for production...
✓ 12 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.30 kB
dist/assets/main-xxxxx.js          1.23 kB │ gzip:  0.67 kB
dist/assets/main-xxxxx.css         0.89 kB │ gzip:  0.45 kB
```

**Time:** ~10-30 seconds

---

## 👁️ STEP 4: Preview Production Build

```bash
npm run preview
```

**What it does:**
- Serves the production build locally
- Allows you to test the build before deployment
- Runs on http://localhost:4173/

**Expected output:**
```
  ➜  Local:   http://localhost:4173/
```

**To stop:** Press `Ctrl + C` (or `Cmd + C` on Mac)

---

## 📦 STEP 5: Clear Everything & Start Fresh

If you need to completely clean and reinstall:

### 5a. Remove node_modules and lock files
```bash
rm -rf node_modules package-lock.json
```

**On Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
```

### 5b. Clear npm cache
```bash
npm cache clean --force
```

### 5c. Reinstall everything
```bash
npm install
```

---

## 🧹 STEP 6: Clean Build Output

To remove the `dist/` folder:

```bash
rm -rf dist
```

**On Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force dist
```

Then rebuild:
```bash
npm run build
```

---

## 📝 Quick Command Cheat Sheet

| Command | Purpose | Time |
|---------|---------|------|
| `npm install` | Install dependencies | 2-3 min |
| `npm run dev` | Start dev server | Instant |
| `npm run build` | Create production build | 10-30 sec |
| `npm run preview` | Preview prod build | Instant |
| `npm cache clean --force` | Clear npm cache | 30 sec |

---

## 🔄 Typical Development Workflow

### First Time Setup:
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Edit files in src/ folder
# 4. See changes instantly in browser!
```

### Ready for Production:
```bash
# 1. Build optimized version
npm run build

# 2. Preview the build locally
npm run preview

# 3. Deploy dist/ folder to server
```

---

## 🐛 Troubleshooting Commands

### Port 3000 already in use?

**Kill process on port 3000:**

```bash
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

Or change port in `vite.config.js`:
```javascript
server: {
  port: 3001  // Use different port
}
```

### npm install is slow?

```bash
# Try using different registry
npm install --registry https://registry.npmjs.org/
```

### Need to check Node.js version?

```bash
node --version
npm --version
```

---

## 🚢 Deployment Commands

### Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm run build
# Then drag & drop dist/ folder to Netlify
```

### Manual Server Deployment:
```bash
npm run build
# Upload dist/ folder to your server's public directory
```

---

## 📊 Project Size

Check your project size:

```bash
# Check node_modules size
du -sh node_modules

# Check dist size
du -sh dist
```

**Typical sizes:**
- `node_modules`: ~500MB
- `dist` (production build): ~100KB gzipped

---

## ✅ Verification Checklist

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts server and opens browser
- [ ] Can edit files and see changes in real-time
- [ ] `npm run build` creates `dist/` folder
- [ ] `npm run preview` shows production build
- [ ] Ready for deployment!

---

## 🎓 Next Steps

After getting comfortable with these commands:

1. **Learn React Fundamentals**
   - Components, Props, State, Hooks

2. **Add Routing**
   ```bash
   npm install react-router-dom
   ```

3. **Add Styling (Tailwind CSS)**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Add State Management**
   ```bash
   npm install zustand
   # or
   npm install redux @reduxjs/toolkit react-redux
   ```

5. **Add Testing**
   ```bash
   npm install -D vitest @testing-library/react
   ```

---

## 💡 Pro Tips

1. **Keep dev server running** while developing - no need to restart!
2. **Use Ctrl+Shift+R** in browser to hard refresh if something looks wrong
3. **Check console errors** with F12 - useful for debugging
4. **Use browser DevTools** to inspect React components (install React DevTools extension)
5. **Git commit before big changes** - helps recover if something breaks

---

## 🆘 Need Help?

**Useful Resources:**
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
- npm Docs: https://docs.npmjs.com/

---

**Happy Coding! ⚛️ ⚡**
