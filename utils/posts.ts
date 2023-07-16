import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Work } from '@/models'

const BLOG_DIR_PATH = path.join(process.cwd(), 'blogs')

export async function getPostList(): Promise<Work[]> {
  const filenameList = fs.readdirSync(BLOG_DIR_PATH)

  const fileParsedList = filenameList.map((filename, index): Work => {
    const filePath = path.join(BLOG_DIR_PATH, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // parse md file to js object
    const { data, content, excerpt } = matter(fileContent, {
      excerpt_separator: '<!-- truncate-->',
    })
    return {
      id: index,
      slug: data.slug,
      title: data.title,
      imageUrl: data.image || null,
      createdAt: data.create_at,
      tags: data.tags,
      description: excerpt,
      mdContent: content,
      author: {
        name: data.author,
        title: data.author_title,
        url: data.author_url,
        imageUrl: data.author_image_url,
      },
    }
  })

  return fileParsedList
}
