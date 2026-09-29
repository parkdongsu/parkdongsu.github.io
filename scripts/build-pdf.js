#!/usr/bin/env node
/* Builds assets/Dongsu_Park_Portfolio.pdf from print.html using Playwright + Chromium.
 *   node scripts/build-pdf.js            (serves the repo root on a local port, renders, writes the PDF)
 * Env: PLAYWRIGHT_MODULE (path to the playwright package), CHROMIUM_PATH (executable), PDF_OUT (output path)
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const out = process.env.PDF_OUT || path.join(root, "assets", "Dongsu_Park_Portfolio.pdf");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml" };
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html");
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage();
  await page.emulateMedia({ media: "print" });
  await page.goto(`http://127.0.0.1:${port}/print.html`, { waitUntil: "load" });
  await page.waitForFunction(() => Array.from(document.images).every((i) => i.complete));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: out, format: "A4", printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `<div style="width:100%;font-family:Pretendard,'Noto Sans KR',sans-serif;font-size:8px;color:#8a919e;padding:0 14mm;display:flex;justify-content:space-between;">
      <span>박동수 · Portfolio</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`
  });
  await browser.close();
  server.close();
  console.log(`PDF written: ${path.relative(root, out)} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
})().catch((e) => { console.error(e); process.exit(1); });
