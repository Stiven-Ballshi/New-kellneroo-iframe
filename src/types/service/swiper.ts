export type GetAllSwiperItems = {
  id: number
  attributes: {
    title: string
    description: string
    role: string
    location: string
    category: string
    userimg: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string
          caption: string
          width: number
          height: number
          formats: {
            thumbnail: {
              name: string
              hash: string
              ext: string
              mime: string
              path: null
              width: number
              height: number
              size: number
              url: string
            }
            medium: {
              name: string
              hash: string
              ext: string
              mime: string
              path: null
              width: number
              height: number
              size: number
              url: string
            }
            small: {
              name: string
              hash: string
              ext: string
              mime: string
              path: null
              width: number
              height: number
              size: number
              url: string
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: null
          provider: string
          provider_metadata: null
          createdAt: string
          updatedAt: string
        }
      }[]
    }
  }
}

export type GetAllSwiperContent = {
  data: GetAllSwiperItems[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
