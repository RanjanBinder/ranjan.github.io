# Ranjan — Portfolio

A clean, minimal Jekyll portfolio for a BI / IT Business Analyst, built to
deploy on **GitHub Pages**.

---

## 🚀 Quick deploy to GitHub Pages (5 steps)

### Step 1 — Create the repository

You have **two options** for your GitHub Pages site:

**Option A — User site** (recommended, cleanest URL: `https://YOUR-USERNAME.github.io`)
Create a new repo named **exactly** `YOUR-USERNAME.github.io` (replace with your actual GitHub username).

**Option B — Project site** (URL: `https://YOUR-USERNAME.github.io/portfolio`)
Create a repo with any name (e.g., `portfolio`). If you use this, open `_config.yml` and change:
```yaml
baseurl: "/portfolio"   # match your repo name
```

### Step 2 — Push these files

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch **`main`** and folder **`/ (root)`**
5. Click **Save**

Wait ~1–2 minutes. Your site will be live at the URL shown on that page.

### Step 4 — Personalize `_config.yml`

Open `_config.yml` and replace these placeholders:

```yaml
email: your.email@example.com
github_username: your-username
linkedin_username: your-linkedin
url: "https://your-username.github.io"
```

### Step 5 — Add your resume

Drop your resume PDF at `assets/files/resume.pdf` (replacing the placeholder).

---

## 📝 How to edit content

| What you want to change | File to edit |
|---|---|
| Site title, your name, social links | `_config.yml` |
| Hero text on homepage | `index.html` |
| About page content | `about.md` |
| Skills cards | `index.html` (skills section) |
| Add a project | Create a new file in `_projects/` |
| Add a blog post | Create a new file in `_posts/` (name it `YYYY-MM-DD-title.md`) |
| Certifications & Education | `certifications.md` |
| Contact info | `contact.md` |
| Colors, fonts, styling | `assets/css/style.css` |

### Adding a new project

Create `_projects/04-your-project.md`:

```yaml
---
layout: project
title: Your Project Title
tag: SQL · Case Study
summary: One-sentence description shown on the projects grid.
tools: [MySQL, Python, Tableau]
featured: true   # set to true to show on homepage
---

Your project writeup in Markdown goes here.
```

### Adding a new blog post

Create `_posts/2026-04-18-your-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-04-18
categories: [sql, analytics]
---

Post content in Markdown.
```

---

## 🖥 Running locally (optional)

If you want to preview before pushing:

```bash
# One-time setup (requires Ruby)
bundle install

# Run local server
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

---

## 🎨 Customizing the design

The entire design is driven by CSS variables at the top of
`assets/css/style.css`:

```css
:root {
  --bg: #fafaf7;           /* page background */
  --ink: #1a1a1a;          /* primary text */
  --accent: #c25a3a;       /* accent color (terracotta) */
  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
  /* ... */
}
```

Change the accent color to match your taste — anything still works with the
minimal palette.

---

## 📁 File structure

```
portfolio/
├── _config.yml              # site settings
├── Gemfile                  # Ruby dependencies
├── index.html               # homepage
├── about.md                 # About page
├── projects.md              # Projects index
├── blog.md                  # Blog index
├── certifications.md        # Certifications & Education
├── contact.md               # Contact page
├── _layouts/                # page templates
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   └── project.html
├── _includes/               # reusable partials
│   ├── header.html
│   └── footer.html
├── _projects/               # project case studies
├── _posts/                  # blog posts
└── assets/
    ├── css/style.css        # main stylesheet
    ├── files/resume.pdf     # your resume
    └── images/              # for any images you add
```

---

## ✅ Checklist before you publish

- [ ] Update `_config.yml` with your real name, email, socials, URL
- [ ] Replace `assets/files/resume.pdf` with your actual resume
- [ ] Update `about.md` with your real story
- [ ] Replace the 3 sample projects in `_projects/` with yours (or edit them)
- [ ] Update `certifications.md` with real certifications
- [ ] Update `contact.md` with your preferred contact methods
- [ ] Delete the two sample blog posts in `_posts/` if you don't want them

That's it. Good luck with the interviews.
