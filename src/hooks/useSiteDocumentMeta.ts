import { useEffect } from 'react'

import { siteVision } from '@/lib/site-vision'

/** Sincroniza title e meta description com `content/site/vision.json`. */
export const useSiteDocumentMeta = () => {
  useEffect(() => {
    document.title = siteVision.documentTitle

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', siteVision.metaDescription)
    }
  }, [])
}
