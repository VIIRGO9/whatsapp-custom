<<<<<<< HEAD
# whatsapp-custom
=======
<<<<<<< HEAD
# whatsapp-custom
=======
# WhatsApp Custom Linux Wrapper

A lightweight, custom native desktop wrapper for WhatsApp Web built with [Electron](https://www.electronjs.org/). This project provides a clean, borderless, and integrated desktop experience for Linux users, complete with a `.deb` package for easy installation.

## ✨ Features
- 🖥️ Native Linux desktop window (no browser tabs)
- 🚫 Clean UI (default menu bar hidden)
- 💾 Persistent login sessions
- 📦 Ready-to-install `.deb` package for Debian/Ubuntu/Kali Linux
- 🛡️ Modern Chrome User-Agent spoofing to bypass browser compatibility checks

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

## 🚀 Getting Started

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/your-repo-name.git
cd your-repo-name
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Run the app in development mode
\`\`\`bash
npm start
\`\`\`

## 📦 Building the `.deb` Package
To generate a standalone Debian package for installation:
\`\`\`bash
npm run build
\`\`\`
*The generated `.deb` file will be located in the `dist/` directory.*

### Install the package:
\`\`\`bash
sudo dpkg -i dist/linux-whatsapp-web_1.0.0_amd64.deb
sudo apt --fix-broken install -y # If any dependencies are missing
\`\`\`

## 📝 License
MIT License - feel free to use and modify for your own Linux setups!
>>>>>>> a72945e (Initial commit: Custom WhatsApp Web Electron wrapper with .deb build support)
>>>>>>> 8faf410 (commit: Custom WhatsApp Web Electron wrapper)
