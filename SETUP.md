# Portfolio React - Setup Instructions

## Important: Resume PDF Location

Your portfolio is configured to read your resume from:
```
portfolio-react/public/cv/resume.pdf
```

## Steps to Complete Setup:

### 1. Install Node.js
Since Node.js is not currently installed on your system, you need to:
- Download Node.js from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Restart your terminal/command prompt after installation

### 2. Prepare Your Resume
- Create the folder: `portfolio-react/public/cv/`
- Copy your resume PDF from `Desktop/cv/` to `portfolio-react/public/cv/resume.pdf`

### 3. Install Dependencies
Open a terminal in the `portfolio-react` folder and run:
```bash
npm install
```

### 4. Run the Application
```bash
npm run dev
```

The portfolio will open in your browser at `http://localhost:3000`

## Features Included:

✅ **Modern Design**
- Dark theme with vibrant gradients
- Geometric shape decorations (circles, squares, triangles, hexagons)
- Glassmorphism effects
- Smooth animations

✅ **Sections**
- Hero section with your name and title
- About section with background info
- Skills section with categorized skills
- Experience/Projects timeline
- Contact section with email, phone, location

✅ **PDF Integration**
- Automatically reads your resume PDF
- Extracts name, contact info, and content
- Falls back to default content if PDF is unavailable

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Smooth scrolling navigation
- Professional typography

## Customization:

### Change Colors
Edit `src/index.css` and modify the CSS variables:
```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent: #ec4899;
}
```

### Modify Content
If you want to manually edit content instead of using PDF:
- Edit the default data in `src/App.jsx`
- Look for the `setResumeData` call in the `useEffect` hook

## Troubleshooting:

**PDF not loading?**
- Make sure the PDF is at `public/cv/resume.pdf`
- Check browser console for errors
- The app will show default content if PDF fails

**Shapes not showing?**
- They're subtle with low opacity (0.1)
- Look for animated geometric shapes in the background
- They use gradient colors from the theme

**Need help?**
- Check the browser console for errors
- Make sure all dependencies installed correctly
- Verify Node.js version: `node --version` (should be 16+)
