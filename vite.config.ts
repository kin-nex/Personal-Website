import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		reactRouter(),
	],
	resolve: {
		alias: {
			"~": fileURLToPath(new URL("./app", import.meta.url)),
			"@components": fileURLToPath(new URL("./app/components/ui", import.meta.url)),
		},
	},
});
