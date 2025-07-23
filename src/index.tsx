import { serve } from "bun";
import index from "./index.html";
import data from "./data.json";

const server = serve({
	routes: {
		"/api/cv": () =>
			new Response(JSON.stringify(data), {
				headers: { "Content-Type": "application/json" },
			}),
		// Serve index.html for all unmatched routes.
		"/*": index,
	},

	development: process.env.NODE_ENV !== "production" && {
		// Enable browser hot reloading in development
		hmr: true,

		// Echo console logs from the browser to the server
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
