import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language='javascript'
				PreTag='div'
				showLineNumbers={true}
				// wrapLines={true}
			>
				{String(children).replace(/\n$/, '').replace(/\t/, ' ')}
			</SyntaxHighlighter>
		)
	},
}

export default Codeblock
