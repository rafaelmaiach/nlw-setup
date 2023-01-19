import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		viteCompression({
			verbose: true,
			algorithm: "brotliCompress",
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(
				new URL("./src/components", import.meta.url)
			),
			"@composables": fileURLToPath(
				new URL("./src/composables", import.meta.url)
			),
			"@icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
		},
	},
});
