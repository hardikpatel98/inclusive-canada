import puppeteer from '/Users/hpatel/.nvm/versions/node/v18.18.0/lib/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import { mkdir, readdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const url    = process.argv[2] || 'http://localhost:3000'
const label  = process.argv[3] || ''   // e.g. "about/desktop" or just "desktop"
const width  = parseInt(process.argv[4] || '1440')

// Parse subfolder from label: "about/desktop" -> subfolder="about", basename="desktop"
const slashIdx = label.lastIndexOf('/')
const subfolder = slashIdx >= 0 ? label.slice(0, slashIdx) : ''
const basename  = slashIdx >= 0 ? label.slice(slashIdx + 1) : label

const OUT_DIR = path.join(__dirname, 'temporary screenshots', subfolder)
await mkdir(OUT_DIR, { recursive: true })

// Auto-increment within the target subfolder
const existing = (await readdir(OUT_DIR))
  .filter(f => f.endsWith('.png'))
  .map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0'))
const n = (existing.length ? Math.max(...existing) : 0) + 1
const filename = `screenshot-${n}${basename ? '-' + basename : ''}.png`
const filepath = path.join(OUT_DIR, filename)

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width, height: 900 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 1500))

// Scroll through to trigger IntersectionObserver animations
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let scrollY = 0
    const interval = setInterval(() => {
      scrollY += 300
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

const rel = path.relative(__dirname, filepath)
console.log(`Saved: ${rel}`)
