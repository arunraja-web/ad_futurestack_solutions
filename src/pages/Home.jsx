import Hero from '../components/home/Hero.jsx'
import Story from '../components/about/Story.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Process from '../components/home/Process.jsx'
import Technologies from '../components/home/Technologies.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'
import Container from '../components/common/Container.jsx'
import SEO from '../components/common/SEO.jsx'

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://adfuturestack.com/#organization',
      'name': 'AD FutureStack',
      'url': 'https://adfuturestack.com',
      'logo': 'https://adfuturestack.com/images/AD%20Logo.png',
      'description': 'Modern IT services, web development, mobile apps, AI automation, and software engineering studio.',
      'email': 'adfuturestacksolutions@gmail.com',
      'telephone': '+91 9488681492',
      'sameAs': [
        'https://github.com/adfuturestacksolutions'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adfuturestack.com/#website',
      'url': 'https://adfuturestack.com',
      'name': 'AD FutureStack',
      'description': 'Modern IT services & software development studio.',
      'publisher': {
        '@id': 'https://adfuturestack.com/#organization'
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <SEO
        title="AD FutureStack — IT Services & Software Development Studio"
        description="AD FutureStack builds custom web applications, mobile apps, AI automation workflows, and scalable multi-tenant SaaS platforms for ambitious companies."
        keywords="AD FutureStack, IT Services, Web Development Studio, Custom Software Development, App Development, AI Workflows, SaaS Platform"
        canonicalUrl="https://adfuturestack.com/"
        schema={homeSchema}
      />
      <Hero />
      <Container>
        <Story />
      </Container>
      <FeaturedProjects />
      <Process />
      <Technologies />
      <WhatWeDo />
      <HomeCTA />
    </>
  )
}
