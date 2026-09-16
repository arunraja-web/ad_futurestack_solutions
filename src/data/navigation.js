export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'What We Do',
    to: '/services',
    children: [
      { label: 'Services', to: '/services', description: 'Product engineering, APIs, cloud & data services', iconName: 'Layers' },
      { label: 'Capabilities', to: '/capabilities', description: 'Cloud architecture, AI automation & system engineering matrix', iconName: 'Code' },
      { label: 'Solutions', to: '/solutions', description: 'Pre-engineered enterprise platform blueprints', iconName: 'Sparkles' },
    ],
  },
  { label: 'Careers', to: '/careers' },
  { label: 'About Us', to: '/about' },
]
