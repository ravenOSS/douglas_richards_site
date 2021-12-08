import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content') // __dirname

export function getSortedPostsData() {
	// Get the post filenames
	const fileNames = fs.readdirSync(contentDirectory)
	const allPostsData = fileNames.map((fileName) => {
		// Remove .md from filename to get unique id
		const id = fileName.replace(/\.md$/, '')

		// Read the markdown string data
		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Parse file metadata with gray-matter
		const parsedMatter = matter(fileContents)

		//
		return {
			id,
			...parsedMatter.data,
		}
	})

	// Sort blog posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})
}
