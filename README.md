# Rehab Uddin Shawon — personal website

Plain HTML + CSS, hosted free on GitHub Pages. No build step: edit a file, push, and the site updates in about a minute.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage: hero, stats, demo reel, featured research, publications, experience, news |
| `projects.html` | All projects with category filters |
| `assets/css/style.css` | All styling. Colors are at the top (`--accent` changes the whole theme) |
| `assets/js/main.js` | Project filters and the "Cite" buttons |
| `assets/img/` | Photos, GIFs, paper teaser figures |
| `assets/video/` | MP4 videos (keep each under ~20 MB) |
| `assets/cv/Shawon_CV.pdf` | Your CV (the CV buttons point here) |

## Adding your media

Every grey box on the site is a placeholder. In the HTML, replace the
`<div class="placeholder">…</div>` with one of these:

```html
<!-- Image or GIF -->
<img src="assets/img/cave.gif" alt="Stereo CAVE setup" loading="lazy">

<!-- Short MP4 loop (best quality/size for demos) -->
<video src="assets/video/cave.mp4" autoplay muted loop playsinline></video>

<!-- YouTube -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Demo" loading="lazy" allowfullscreen></iframe>
```

Tips:
- Short loops (5–10 s) as MP4 look better and load faster than GIFs.
- Long gameplay videos: put them on YouTube and embed.
- Profile photo: `assets/img/profile.jpg`, about 600×720 px.

## To-do before going live

- [ ] Profile photo
- [ ] Demo reel (60 s)
- [ ] GIF or video for every card
- [ ] Paper teaser figures
- [ ] CV PDF at `assets/cv/Shawon_CV.pdf`
- [ ] PEIM video link and ICTAI 2026 paper link
