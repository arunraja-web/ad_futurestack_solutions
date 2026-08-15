import fs from 'fs'
import path from 'path'
import https from 'https'
import sharp from 'sharp'

const projectRoot = process.cwd()

const imagesToMigrate = [
  {
    name: 'hero-workspace.webp',
    dir: 'hero',
    url: 'https://images.unsplash.com/photo-1737365505612-7ff3ef8f7970?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'fintech-enterprise.webp',
    dir: 'projects',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'ai-augmented-engineering.webp',
    dir: 'home',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'saas-blueprint.webp',
    dir: 'solutions',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'fintech-platform.webp',
    dir: 'solutions',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'healthcare-system.webp',
    dir: 'projects',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'logistics-engine.webp',
    dir: 'projects',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'cloud-devops.webp',
    dir: 'capabilities',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'architecture-blueprint.webp',
    dir: 'home',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'team-collaboration.webp',
    dir: 'about',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'team-collaboration-services.webp',
    dir: 'services',
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'business-collaboration.webp',
    dir: 'services',
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'services-hero-bg.webp',
    dir: 'services',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
  },
  {
    name: 'solutions-hero-bg.webp',
    dir: 'solutions',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    name: 'api-gateway.webp',
    dir: 'solutions',
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'microservices.webp',
    dir: 'capabilities',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'ai-automation.webp',
    dir: 'capabilities',
    url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'data-systems.webp',
    dir: 'capabilities',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'cybersecurity.webp',
    dir: 'capabilities',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'about-main-story.webp',
    dir: 'about',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'web-engineering.webp',
    dir: 'services',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'mobile-products.webp',
    dir: 'services',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  }
]

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`))
      }
      const data = []
      res.on('data', (chunk) => data.push(chunk))
      res.on('end', () => resolve(Buffer.concat(data)))
    }).on('error', reject)
  })
}

async function run() {
  console.log('Starting image download and WebP conversion...')
  for (const item of imagesToMigrate) {
    const targetFolder = path.join(projectRoot, 'public', 'images', item.dir)
    fs.mkdirSync(targetFolder, { recursive: true })
    const targetPath = path.join(targetFolder, item.name)

    try {
      console.log(`Downloading: ${item.name}`)
      const buf = await downloadBuffer(item.url)
      await sharp(buf).webp({ quality: 80 }).toFile(targetPath)
      const stats = fs.statSync(targetPath)
      console.log(`Saved: public/images/${item.dir}/${item.name} (${Math.round(stats.size / 1024)} KB)`)
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message)
    }
  }
  console.log('All image downloads and conversions complete!')
}

run()
