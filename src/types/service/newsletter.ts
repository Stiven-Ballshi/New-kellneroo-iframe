export interface Attributes2 {
  title: string
  description: string
  category: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
}

export interface Datum {
  id: number
  attributes: Attributes2
}

export interface Localizations {
  data: Datum[]
}

export interface Attributes {
  title: string
  description: string
  category: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  localizations: Localizations
}

export interface NewsletterData {
  data: { id: number; attributes: Attributes }[]
}
