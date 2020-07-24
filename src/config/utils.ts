import rmanifest from 'route-manifest'
import { prefetch } from 'quicklink'

export const prefetchRoute = async (to: string) => {
  if (!window.__rmanifest) {
    const response = await fetch('/rmanifest.json')
    const data = await response.json()
    // attach route manifest to global
    window.__rmanifest = data
  }

  const entry = rmanifest(window.__rmanifest, to)
  const chunkURLs = entry.files.map(file => file.href)
  console.log('[prefetchLink] to, chunkURLs => ', to, chunkURLs)
  if (chunkURLs.length > 0) {
    prefetch(chunkURLs)
  }
}
