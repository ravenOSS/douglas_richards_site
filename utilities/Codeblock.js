import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language='jsx'
				showLineNumbers={false}
				wrapLongLines={false}
			>
				{String(children).replace(/\n$/, '').replace(/\t/g, '  ')}
			</SyntaxHighlighter>
		)
	},
}
export default Codeblock

//! regex replace(/\n$/, '') replaces the newline character; stops the last line from being an empty newline
//! regex replace(/\t/g, ' ') /g replaces all tabs with spaces. Use two spaces to compact code.
