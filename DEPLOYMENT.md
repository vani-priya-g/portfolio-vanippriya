# Deployment Guide - Render

## Step-by-Step Instructions to Deploy Your Portfolio

### Prerequisites
- GitHub account
- Render account (free tier available at render.com)

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done):
```bash
cd portfolio-react
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `portfolio` or `portfolio-website`
   - Make it Public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username (vani-priya-g)

### Step 2: Deploy on Render

1. **Go to Render**: https://render.com/
2. **Sign up/Login** using your GitHub account
3. **Click "New +"** → Select **"Static Site"**
4. **Connect your GitHub repository**:
   - Find and select your `portfolio` repository
   - Click "Connect"

5. **Configure the deployment**:
   - **Name**: `vanippriya-portfolio` (or any name you prefer)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - Click **"Create Static Site"**

6. **Wait for deployment** (usually 2-3 minutes)
   - Render will install dependencies and build your site
   - You'll see the build logs in real-time

7. **Your site is live!**
   - Render will provide a URL like: `https://vanippriya-portfolio.onrender.com`
   - You can customize this URL in settings

### Step 3: Custom Domain (Optional)

If you want a custom domain like `vanippriya.com`:
1. Go to your Render dashboard
2. Click on your static site
3. Go to "Settings" → "Custom Domain"
4. Add your domain and follow DNS instructions

### Automatic Deployments

Every time you push changes to GitHub, Render will automatically rebuild and deploy your site!

To update your portfolio:
```bash
# Make your changes
git add .
git commit -m "Update portfolio content"
git push
```

Render will detect the push and redeploy automatically.

### Troubleshooting

**Build fails?**
- Check that `package.json` has the correct build script
- Ensure all dependencies are listed in `package.json`

**Site not loading?**
- Check the build logs in Render dashboard
- Verify the publish directory is set to `dist`

**Need help?**
- Render documentation: https://render.com/docs/static-sites
- Check build logs for specific errors

---

## Your Portfolio URL

After deployment, update this README with your live URL:
🔗 **Live Site**: [Add your Render URL here]

Congratulations! Your portfolio is now live and accessible to everyone! 🎉
