# Dynamic Import with vite-plugin-ssr

See: https://vite-plugin-ssr.com/dynamic-import

This is an example of how to defer loading of specific components within an SSR/SSG framework. The text and styling are loaded by the server, and the dynamic component (Map.jsx) is loaded on the client side. In this case, loading the [react-leaflet](https://github.com/PaulLeCam/react-leaflet) library would crash the application on the server, so index.page.jsx defers its loading until client rendering.

```bash
git@github.com:arthurgailes/vite-plugin-ssr_dynamic-import-example.git
cd vite-plugin-ssr_dynamic-import-example/
npm install
npm run dev
```
