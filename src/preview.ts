import { serve } from "bun";
import path from "path";
import fs from "fs";

const directory = path.join(import.meta.dir, "..", "dist");

console.log(`Serving files from ${directory}`)

serve({
  fetch(req) {
    const url = new URL(req.url);
    let filePath = path.join(directory, url.pathname);

    // If the path is a directory, serve index.html
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }
    } catch (e) {
      // ignore
    }

    return new Response(Bun.file(filePath));
  },
  error() {
    return new Response(null, { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
