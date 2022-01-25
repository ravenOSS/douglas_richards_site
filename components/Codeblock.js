import React from 'react'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				customStyle={{
					fontSize: '12px',
					paddingLeft: '0px',
					padding: '0px',
				}}
				lineNumberStyle={{
					paddingRight: '5px',
				}}
				language='jsx'
				showLineNumbers={true}
				wrapLongLines={true}
				wrapLines={true}
				lineProps={{ style: { flexWrap: 'wrap' } }}
			>
				{String(children).replace(/\n$/, '').replace(/\t/g, '  ')}
			</SyntaxHighlighter>
		)
	},
}

export default Codeblock

// regex replace(/\n$/, '') replaces the newline character
// regex replace(/\t/g, ' ') /g replaces all tabs with spaces. Use two spaces to compact code.

// const CodeBlock = {
// 	code({ node, inline, className, children, ...props }) {
// 		const match = /language-(\w+)/.exec(className || '')
// 		return !inline && match ? (
// 			<SyntaxHighlighter
// 				style={vscDarkPlus}
// 				language={match[1]}
// 				PreTag='div'
// 				{...props}
// 			>
// 				{String(children).replace(/\n$/, '')}
// 			</SyntaxHighlighter>
// 		) : (
// 			<code className={className} {...props}>
// 				{children}
// 			</code>
// 		)
// 	},
// }

// export default CodeBlock

// Note that the lineProps addition helps with line wrapping but code still wraps into line numbers
// without addition, very weird presentation occurs with 'words' dropping below line and out of sequence
// solution from Github issues
// Getting error using the esm build. Have to use cjs to avoid export error
