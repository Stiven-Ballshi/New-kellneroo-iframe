export interface Benefit2 {
  id: number
  text: string
}

export interface Benefit {
  id: number
  subtitle: string
  category: string
  benefit: Benefit2[]
}

export interface Attributes {
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  benefits: Benefit[]
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface BenefitData {
  data: Data
  meta: any
}
