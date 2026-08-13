# Purane Gaane

A single-page, nostalgic Indian retro music poster with a minimal HTML5-audio player.

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Notes

- The playlist (`src/data/playlist.js`) currently uses placeholder `example.com` audio URLs — swap in real hosted MP3 URLs to make playback work.
- The background is a CSS gradient placeholder. To use a real photo, save it to `public/bg-poster.jpg` and uncomment the `url(...)` line in `src/App.css`.
