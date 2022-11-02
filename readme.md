# Dynamic Import with vite-plugin-ssr

See: https://vite-plugin-ssr.com/dynamic-import

This is an example of how to defer loading of specific components within an SSR/SSG framework. The text and styling are loaded by the server, and the dynamic component (Counter.jsx) is loaded on the client side.

This example is trivial, but useful in cases with component libraries that can only be used on the browser, such as [react-leaflet](https://github.com/PaulLeCam/react-leaflet) or [deck.gl](https://deck.gl/)

```bash
git@github.com:arthurgailes/vite-plugin-ssr_dynamic-import-example.git
cd vite-plugin-ssr_dynamic-import-example/
npm install
npm run dev
```
