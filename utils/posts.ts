import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const BLOG_DIR_PATH = path.join(process.cwd(), 'blogs')

export async function getPostList() {
  const filenameList = fs.readdirSync(BLOG_DIR_PATH)

  const fileParsedList = filenameList.map((filename, index) => {
    const filePath = path.join(BLOG_DIR_PATH, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // parse md file to js object
    const fileParsed = matter(fileContent, { excerpt_separator: '<!-- truncate-->' })
    return {
      id: index,
      ...fileParsed.data,
      content: fileParsed.content,
      description: fileParsed.excerpt,
    }
  })

  return fileParsedList
}
