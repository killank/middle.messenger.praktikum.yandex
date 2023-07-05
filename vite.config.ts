import { resolve } from "path";
import { defineConfig, Plugin } from "vite";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
          }) as Plugin
    ],
    css: {
        preprocessorOptions: {
        less: {
            math: "always",
            relativeUrls: true,
            javascriptEnabled: true,
        },
        },
    },
});