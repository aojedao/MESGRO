# seyi-roboticist.github.io

Personal portfolio of **Seyi R. Afolayan** — Controls & Autonomy Engineer.
Live at **https://seyi-roboticist.github.io**

Flight controls, state estimation, motion planning, and real-time robotics —
each project documented from the math through the implementation to hardware validation.

## Stack

- **Jekyll** with a `projects` collection (`_projects/*.md` → `/projects/:name/`)
- **Hand-written SCSS** in `_sass/`, entry point `assets/css/main.scss`
- **GitHub Actions** deploy (`.github/workflows/jekyll.yml`) on every push to `main`
- **Plugins:** `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-redirect-from`

## Layout

```
_projects/       one Markdown file per project (front matter drives the cards)
_layouts/        default.html (shell) and project.html (project pages)
_includes/       header, footer, analytics
_sass/           base, layout, components, project, responsive
assets/
  css/           main.scss
  js/            main.js, circuit-bg.js, project-viewer.js
  images/        profile, favicons, per-project media
  files/         resume PDF
```

## Running locally

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

Analytics are gated on `jekyll.environment == "production"`, so local runs send nothing.

## Adding a project

Create `_projects/my-project.md`:

```yaml
---
layout: project
title: "Project Title"
description: "One or two sentences — this is the card blurb and the meta description."
status: completed          # or: ongoing
date: 2026-01-15
categories: [ROS2, Controls]
featured_image: "/assets/images/projects/my-project/featured.webp"
github_url: "https://github.com/Seyi-roboticist/my-project"
mathjax: true              # optional: load MathJax for this page
---
```

Per-page opt-in flags keep pages light — `mathjax`, `plotly`, and `model_3d` each
load their library only where declared, rather than on every page.

### Media

Use short **MP4/WebM video** rather than GIF for motion. A few seconds of screen
capture is tens of megabytes as a GIF and a few hundred kilobytes as H.264:

```bash
ffmpeg -i clip.gif -movflags +faststart -pix_fmt yuv420p -vf "fps=24" \
  -c:v libx264 -crf 28 -preset slow clip.mp4
ffmpeg -i clip.gif -vf "select=eq(n\,12)" -vframes 1 clip-poster.webp
```

Point `featured_image` at the poster still (the cards render `<img>`), and embed
the video in the body with the `.project-video` figure pattern.

## Credits

Built on the [MESGRO](https://github.com/aojedao/MESGRO) Jekyll template by
Alejandro Ojeda, MIT licensed. Substantially modified. See `LICENSE`.
