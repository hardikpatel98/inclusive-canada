import puppeteer from '/Users/hpatel/.nvm/versions/node/v18.18.0/lib/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'temporary screenshots')
await mkdir(OUT_DIR, { recursive: true })

const url = process.argv[2] || 'http://localhost:3000'
const label = process.argv[3] || ''
const width = parseInt(process.argv[4] || '1440')

const existing = (await import('fs')).readdirSync(OUT_DIR)
  .filter(f => f.endsWith('.png'))
  .map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0'))
const n = (existing.length ? Math.max(...existing) : 0) + 1
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`
const filepath = path.join(OUT_DIR, filename)

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width, height: 900 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 1500))
// Scroll through page to trigger IntersectionObserver-based animations
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let scrollY = 0
    const step = 300
    const interval = setInterval(() => {
      scrollY += step
      window.scrollTo(0, scrollY)
      if (scrollY >= document.body.scrollHeight) {
        window.scrollTo(0, 0)
        clearInterval(interval)
        resolve()
      }
    }, 80)
  })
})
await new Promise(r => setTimeout(r, 800))
await page.screenshot({ path: filepath, fullPage: true })
await browser.close()

console.log(`Saved: temporary screenshots/${filename}`)
