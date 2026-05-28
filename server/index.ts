import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Trust proxy for HTTPS
  app.set('trust proxy', 1);

  // Security headers
  app.use((req, res, next) => {
    // HTTPS redirect
    if (process.env.NODE_ENV === 'production' && req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });

  // Add security headers
  app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Determine static path based on environment
  // In Vercel: dist/public is the output directory, so serve from ./public
  // Locally: serve from dist/public relative to project root
  const isVercel = !!process.env.VERCEL;
  const staticPath = isVercel
    ? path.join(process.cwd(), 'public')
    : path.resolve(__dirname, '..', 'dist', 'public');

  console.log(`[${isVercel ? 'VERCEL' : 'LOCAL'}] Serving static files from: ${staticPath}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
