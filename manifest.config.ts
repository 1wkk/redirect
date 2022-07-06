import { defineManifest } from '@crxjs/vite-plugin'
import { redirects } from './src/redirects'

export default defineManifest({
  name: 'Redirect',
  manifest_version: 3,
  version: '0.0.1',
  content_scripts: [
    {
      js: ['src/content.ts'],
      matches: Object.keys(redirects).map(r => `${r}/*`)
    }
  ]
})
