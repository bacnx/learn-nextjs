export interface Author {
  name: string
  title: string
  url?: string
  imageUrl?: string
}

export interface Work {
  id: number
  slug: string
  title: string
  imageUrl: string | null
  createdAt: number
  tags: string[]
  description?: string
  mdContent: string
  htmlContent?: string
  author: Author
}

export interface WorkSmall {
  id: number
  slug: string
  title: string
  imageUrl: string | null
  createdAt: number
  tags: string[]
  description?: string
}
