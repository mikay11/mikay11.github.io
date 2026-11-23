# GitHub Instructions — Publishing Your Portfolio Website

Step-by-step guide to push your website to GitHub and make it appear at
**`https://<your-username>.github.io`** (e.g. `mikay11.github.io`).

---

## 1. Create the Repository on GitHub

The key rule: **the repo name must be exactly `<your-username>.github.io`**
(e.g. `mikay11.github.io`). Only a repo with this exact name gets served at
`https://<your-username>.github.io` automatically.

1. Go to https://github.com → click **"+"** → **"New repository"**
2. Repository name: `mikay11.github.io` (or your username + `.github.io`)
3. Set it to **Public** (GitHub Pages does not work on private repos with the free plan)
4. Don't initialize with a README (optional)
5. Click **Create repository**

## 2. Connect Your Local Folder to the Repo

Open a terminal (PowerShell) inside your website folder:

```powershell
git init
git remote add origin https://github.com/<username>/<username>.github.io.git
git branch -M main
```

## 3. Add, Commit, and Upload Your Files

```powershell
git add .
git commit -m "Initial commit: portfolio website"
git push -u origin main
```

Enter your GitHub username and password/token when prompted.

## 4. Verify GitHub Pages Is On

This repo now uses a React + Vite build, so Pages must use GitHub Actions.

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main`
4. `.github/workflows/pages.yml` runs `npm ci`, builds the React app, and publishes `dist/`

Because the repo is named `<username>.github.io`, the root Pages URL is:

```
https://mikay11.github.io
```

Wait 1–5 minutes for the workflow to finish, then open the URL.

## 5. Updating the Site Later

Change your files, then:

```powershell
git add .
git commit -m "Update pages"
git push
```

The site updates automatically after a minute or two.

## 6. If You Made the Wrong Repo Name (e.g. `miksweb.github.io`)

A repo with a wrong name gets served at a long URL like
`https://mikay11.github.io/miksweb.github.io/` — typing plain
`mikay11.github.io` shows a 404. Fix by renaming:

**Option A — GitHub website:** Repo → **Settings** → General → *Repository name* → type the new name (`mikay11.github.io`) → **Rename**

**Option B — GitHub CLI:**

```powershell
gh repo rename mikay11.github.io --repo mikay11/miksweb.github.io --yes
```

Then update the local remote and push:

```powershell
git remote set-url origin https://github.com/mikay11/mikay11.github.io.git
git push origin main
```

Check the new Pages URL:

```powershell
gh api repos/mikay11/mikay11.github.io/pages
```

Look for `"html_url": "https://mikay11.github.io/"` and `"status": "built"`.

## Troubleshooting

- **404 at `mikay11.github.io`** → repo name is wrong, must be exactly `mikay11.github.io`
- **Repo must be Public** → Pages needs it on the free plan
- **Site not updating** → wait a few minutes; it rebuilds on every push
- **Login prompt on push** → use a Personal Access Token or `gh auth login`