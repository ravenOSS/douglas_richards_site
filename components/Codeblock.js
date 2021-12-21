import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language='javascript'
				showLineNumbers={true}
				wrapLongLines={true}
			>
				{String(children).replace(/\n$/, '').replace(/\t/g, '  ')}
			</SyntaxHighlighter>
		)
	},
}

export default Codeblock

// regex replace(/\n$/, '') removes the last newline character
// regex replace(/\t/g, ' ') /g replaces all tabs with spaces
