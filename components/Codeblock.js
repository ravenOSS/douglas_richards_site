import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				customStyle={{
					fontSize: '8px',
					// paddingLeft: '1px',
					// padding: '20px',
					// border: '5px',
				}}
				// PreTag='div'
				lineNumberStyle={{
					paddingRight: '20px',
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

//! regex replace(/\n$/, '') replaces the newline character; stops the last line from being an empty newline
//! regex replace(/\t/g, ' ') /g replaces all tabs with spaces. Use two spaces to compact code.

// Note that the lineProps addition helps with line wrapping but code still wraps into line numbers
// without addition, very weird presentation occurs with 'words' dropping below line and out of sequence
// solution from Github issues
// Getting error using the esm build. Have to use cjs to avoid export error

// const CodeBlock = {
// 	code({ inline, className, children, ...props }) {
// 		const match = /language-(\w+)/.exec(className || '')
// 		return !inline && match ? (
// 			<SyntaxHighlighter
// 				style={vscDarkPlus}
// 				language={match[1]}
// 				PreTag='div'
// 				lineNumberStyle={{
// 					paddingRight: '5px',
// 				}}
// 				showLineNumbers={true}
// 				wrapLongLines={true}
// 				{...props}
// 			>
// 				{String(children).replace(/\n$/, '').replace(/\t/g, '  ')}
// 			</SyntaxHighlighter>
// 		) : (
// 			<code className={className} {...props}>
// 				{children}
// 			</code>
// 		)
// 	},
// }

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
