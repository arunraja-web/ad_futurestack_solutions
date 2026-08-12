import React, { useEffect } from 'react'

export default function SEO({
  title = 'AD FutureStack — IT Services & Solutions',
  description = 'AD FutureStack is a modern IT services, software development & product engineering studio. We design, build, and scale enterprise web apps, mobile apps, AI workflows, and SaaS platforms.',
  keywords = 'IT Services, Web Development, Software Engineering, SaaS Development, Mobile Apps, AI Workflows, Cloud DevOps, AD FutureStack',
  ogImage = '/images/AD Logo.png',
  canonicalUrl = 'https://adfuturestack.com/'
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Helper to set or update meta tag
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

    // Open Graph Tags
    setMeta('meta[property="og:title"]', 'og:title', title)
    setMeta('meta[property="og:description"]', 'og:description', description)
    setMeta('meta[property="og:image"]', 'og:image', ogImage)
    setMeta('meta[property="og:type"]', 'og:type', 'website')

    // Twitter Card Tags
    setMeta('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'twitter:image', ogImage)

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [title, description, keywords, ogImage, canonicalUrl])

  return null
}
