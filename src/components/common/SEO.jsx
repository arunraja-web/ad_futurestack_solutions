import { useEffect } from 'react'

const DOMAIN = 'https://adfuturestack.com'

export default function SEO({
  title = 'AD FutureStack — IT Services & Software Development Studio',
  description = 'AD FutureStack is a modern IT services & software development studio. We engineer custom web applications, mobile apps, AI automation workflows, and multi-tenant SaaS platforms.',
  keywords = 'IT Services, Web Development, Software Engineering, SaaS Development, Mobile Apps, AI Workflows, Cloud DevOps, AD FutureStack',
  ogImage = '/images/AD Logo.png',
  canonicalUrl = 'https://adfuturestack.com/',
  robots = 'index, follow',
  schema = null
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Resolve absolute URL for social sharing images
    const absoluteOgImage = ogImage.startsWith('http')
      ? ogImage
      : `${DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

    // 3. Helper to set or update meta tag
    const setMeta = (selector, name, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          el.setAttribute('property', name)
        } else {
          el.setAttribute('name', name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Set meta tags
    setMeta('meta[name="description"]', 'description', description)
    setMeta('meta[name="keywords"]', 'keywords', keywords)
    setMeta('meta[name="robots"]', 'robots', robots)

    // Open Graph Tags
    setMeta('meta[property="og:title"]', 'og:title', title)
    setMeta('meta[property="og:description"]', 'og:description', description)
    setMeta('meta[property="og:image"]', 'og:image', absoluteOgImage)
    setMeta('meta[property="og:url"]', 'og:url', canonicalUrl)
    setMeta('meta[property="og:type"]', 'og:type', 'website')

    // Twitter Card Tags
    setMeta('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'twitter:image', absoluteOgImage)

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // Dynamic JSON-LD Schema injection
    let scriptTag = document.getElementById('dynamic-json-ld')
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'dynamic-json-ld'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.text = JSON.stringify(schema)
    } else if (scriptTag) {
      scriptTag.remove()
    }
  }, [title, description, keywords, ogImage, canonicalUrl, robots, schema])

  return null
}
