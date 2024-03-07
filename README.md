## Installation

Run in your terminal:

```bash
npm install
npm run dev
```

`npm run dev` output will indicate that local is accessible via http://localhost:5173/ provided some other app isn't blocking the port.

You may also run `npm run devhost` to host on the 0.0.0.0 interface, but _WARNING!_ this may expose the app to WAN if your computer and network is configured to do so! This is however handy to allow other computers on the LAN to see the app.

### Notes

This uses [Vite.js](https://github.com/vitejs/vite) for the best dev experience.
