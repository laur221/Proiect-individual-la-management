import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 8080;

const distPath = resolve(__dirname, 'dist');
const indexHtml = readFileSync(join(distPath, 'index.html'), 'utf-8');

// Simple static file server for the built assets
const server = createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filepath = join(distPath, url);
  
  try {
    if (url.endsWith('.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    } else if (url.endsWith('.js')) {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(readFileSync(filepath));
    } else if (url.endsWith('.css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(readFileSync(filepath));
    } else if (url.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)) {
      const ext = url.split('.').pop();
      res.writeHead(200, { 'Content-Type': `image/${ext}` });
      res.end(readFileSync(filepath));
    } else {
      // For SPA, return index.html for all other routes
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    }
  } catch (e) {
    console.error(`Error handling ${url}:`, e);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});