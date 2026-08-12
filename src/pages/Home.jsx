import Hero from '../components/home/Hero.jsx'
import Story from '../components/about/Story.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Process from '../components/home/Process.jsx'
import Technologies from '../components/home/Technologies.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'
import Container from '../components/common/Container.jsx'
import SEO from '../components/common/SEO.jsx'

export default function Home() {
  return (
    <>
      <SEO
        title="AD FutureStack — IT Services & Software Solutions"
        description="AD FutureStack is a modern IT services & software development studio. We engineer custom web applications, mobile apps, AI automation workflows, and multi-tenant SaaS platforms."
        keywords="AD FutureStack, IT Services, Web Development Studio, Custom Software Development, App Development, AI Workflows, SaaS Platform"
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
