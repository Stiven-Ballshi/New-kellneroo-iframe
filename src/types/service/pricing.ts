export type SeoData = {
  data: {
    id: number
    attributes: {
      seo: {
        id: number
        title: string
        description: string
      }
    }
  }
}

export type GetPricing = {
  data: {
    id: number
    attributes: {
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
      seo: {
        id: number
        title: string
        description: string
      }
    }
  }
}
