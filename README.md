# CV2Web

Turn your CV into a live website in one command.

CV2Web is a tool that generates a beautiful, interactive resume website from a simple YAML file. Just define your resume data, choose your fonts and colors, and let the system generate a professional Next.js website for you.

## Features

- **Beautiful Design** - Modern, responsive design with an interactive halftone photo canvas
- **Customizable** - Configure fonts and color palettes to match your style
- **YAML-based** - Write your resume in simple YAML format
- **GitHub Actions** - Automatic builds and deployment to GitHub Pages
- **Easy Setup** - Get started in minutes

## Quick Start

### 1. Fork this Repository

**Important**: To use GitHub Pages, you should:

1. **Fork this repository** to your GitHub account
2. **Rename the repository** to `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Go to Settings → General → Repository name
   - This naming convention enables GitHub Pages automatically
3. **Clone your forked repository**:

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

> **Note**: Using `username.github.io` as the repository name is the standard way to host personal websites on GitHub Pages. Your site will be available at `https://yourusername.github.io`.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Setup Script

Run the setup script to copy template files and create initial resume.yaml:

```bash
./setup.sh
```

This will:
- Copy template files (components, lib) to the project root
- Create `resume.yaml` from `resume.example.yaml` if it doesn't exist
- Set up the project structure

### 4. Set Up Your Resume

Edit `resume.yaml` with your information. You can customize:
- Personal information (name, title, photo, links)
- Summary
- Professional experience
- Projects
- Skills
- Education
- Languages
- Volunteering
- **Fonts** (choose from Google Fonts)
- **Color palette** (customize all colors)

### 5. Add Your Photo

Place your photo in the `public/` directory (e.g., `public/photo.png`) and update the `photo` path in `resume.yaml`.

### 6. Generate and Preview

```bash
# Generate the site from resume.yaml
npm run generate

# Preview locally
npm run dev
```

Visit `http://localhost:3000` to see your resume website.

### 7. Deploy with GitHub Actions

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit with my resume"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
   - Save the settings

3. **Trigger the build**:
   - The GitHub Actions workflow will automatically run when you push to the `main` branch
   - You can also manually trigger it from the **Actions** tab → **Build and Deploy** → **Run workflow**

The GitHub Actions workflow will:
- Copy template files
- Generate the site from `resume.yaml`
- Build the Next.js site
- Deploy to GitHub Pages

Your site will be available at `https://yourusername.github.io` (after the build completes, usually takes 1-2 minutes).

## Resume YAML Structure

### Personal Information

```yaml
personal:
  name: "Your Name"
  title: "Your Job Title"
  photo: "photo.png"
  links:
    github:
      username: "yourusername"
      url: "https://github.com/yourusername"
    linkedin:
      username: "LinkedIn"
      url: "https://www.linkedin.com/in/yourprofile/"
    email:
      address: "your.email@example.com"
```

### Customizing Colors

Define your color palette in the `colors` section:

```yaml
colors:
  background: "#020202"
  foreground: "#CECFC7"
  primary: "#3E6259"
  # ... more colors
```

### Customizing Fonts

Choose fonts from Google Fonts:

```yaml
fonts:
  sans: "Geist"  # or "Inter", "Roboto", etc.
  mono: "Geist Mono"  # or "Fira Code", etc.
```

## Project Structure

```
CV2Web/
├── resume.yaml              # Your resume data (create from resume.example.yaml)
├── resume.example.yaml      # Example resume template
├── generate.js              # Generation script
├── template/                # Template files (components, lib)
│   ├── components/
│   │   ├── image-canvas.tsx
│   │   └── ui/
│   └── lib/
├── app/                     # Generated Next.js app (created by generate.js)
│   ├── page.tsx            # Generated from resume.yaml
│   ├── layout.tsx          # Generated from resume.yaml
│   └── globals.css         # Generated from resume.yaml
├── components/             # Copied from template/
├── lib/                    # Copied from template/
├── public/                 # Static assets (photos, etc.)
└── .github/
    └── workflows/
        └── build.yml       # GitHub Actions workflow
```

## Scripts

- `./setup.sh` - **One-time setup**: Copy template files and create initial resume.yaml
- `npm run generate` - Generate the site from resume.yaml (runs `generate.js`)
- `npm run dev` - Generate and start development server
- `npm run build` - Generate and build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization Tips

### Changing Colors

Edit the `colors` section in `resume.yaml`. All colors use hex format (`#RRGGBB`). The color palette includes:
- `background` - Main background color
- `foreground` - Main text color
- `primary` - Primary accent color
- `card` - Card background color
- And more...

### Changing Fonts

Update the `fonts` section in `resume.yaml`. Use any Google Font name. Common choices:
- Sans-serif: `"Inter"`, `"Roboto"`, `"Open Sans"`, `"Geist"`
- Monospace: `"Fira Code"`, `"Source Code Pro"`, `"Geist Mono"`

## Requirements

- Node.js 20+ 
- npm or yarn

## License

[MIT License](LICENSE) © 2026 Mohamadreza Najarbashi

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
