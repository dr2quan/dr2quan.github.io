import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: { title: "表世界郊游",
          subtitle: "Surface",
          author: "o-o",
          description: 'A brief moment on the surface',
          website: 'https://dr2quan.github.io',
          socialLinks:[
            {
              name: 'rss',
              href: '/atom.xml',
            },
            {
              name: 'email',
              href: 'mailto:yu_xue@me.com'
            },
          ],
          categoryMap: [{name :'表世界', path:'surface'}],
  },
  appearance: {
    theme: 'light',
  }
  // seo: { twitter: "@moeyua13" },
}
