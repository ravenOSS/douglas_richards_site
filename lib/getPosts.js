import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'react-markdown'
import remarktml from 'remark-html'

const contentDirectory = path.join(process.cwd(), '/content/posts') // __dirname

export function getPosts() {
	//! Get the post filenames
	const fileNames = fs.readdirSync(contentDirectory)

	const allPostsData = fileNames.map((fileName) => {
		//! Remove .md from filename to get unique id
		const id = fileName.replace(/\.md$/, '')

		//! Read the markdown string data
		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		//! Parse file metadata with gray-matter
		const parsedMatter = matter(fileContents)

		return {
			id,
			...parsedMatter.data,
		}
	})

	//! Sort posts by date
	return allPostsData.sort(({ date: a }, { date: b }) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(contentDirectory)

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export function getPostById(id) {
	const fullPath = path.join(contentDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const { data, content } = matter(fileContents)

	return {
		id,
		data,
		content,
	}
}
