export interface LandingContent {
  id: number
  title: string
  description: string
  button_name: string
  tags: Tags[]
}

export interface Tags {
  id: number
  name: string
}
export interface Localizations {
  data: any[]
}

export interface Attributes {
  title: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  landing_content: LandingContent[]
  localizations: Localizations
  seo: {
    id: number
    title: string
    description: string
  }
}

export interface Data {
  id: number
  attributes: Attributes
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Meta {}

export interface LandingData {
  data: Data
  meta: Meta
}
