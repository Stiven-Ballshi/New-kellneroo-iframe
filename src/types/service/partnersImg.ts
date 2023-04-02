export interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
}

export interface Hero {
  id: number
  title: string
}

export interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats?: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: Date
  updatedAt: Date
}

export interface Datum {
  id: number
  attributes: Attributes2
}

export interface Image {
  data: Datum[]
}

export interface Attributes {
  createdAt: Date
  updatedAt: Date
  seo: Seo
  hero: Hero
  image: Image
}

export interface PartnerData {
  data: { id: number; attributes: Attributes }
}
