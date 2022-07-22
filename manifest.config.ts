import { defineManifest } from '@crxjs/vite-plugin'
import { redirects } from './src/redirects'

export default defineManifest({
  name: 'Redirect',
  manifest_version: 3,
  version: '0.0.1',
  icons: {
    '16': 'icon.png',
    '32': 'icon.png',
    '48': 'icon.png',
    '128': 'icon.png'
  },
  content_scripts: [
    {
      js: ['src/content.ts'],
      matches: Object.keys(redirects).map(r => `${r}/*`)
    }
  ]
})
