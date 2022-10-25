import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='  grid-rows-[auto,_1fr,_auto]_100px] mx-auto grid min-h-screen w-screen grid-cols-1 place-items-center dark:bg-gray-700'>
			<Navbar className=' row-start-1 row-end-2' />
			{/* <Navbar className='  row-[span_1_/_span_1]' /> */}
			<main className='row-[span_2_/_span_1]    items-center '>{children}</main>
			<Footer className='row-start-3 row-end-4' />
			{/* <Footer className=' row-[span_3_/_span_1]' /> */}
			{/* </div> */}
		</div>
	)
}
// export default function Layout({ children }) {
// 	return (
// 		<div className='  mx-auto flex min-h-screen w-screen flex-col  bg-teal-700'>
// 			{/* <div className='    flex w-full flex-col  bg-purple-400'> */}
// 			<Navbar className='  min-h-fit' />
// 			<main className='  flex flex-grow items-center justify-center'>
// 				{children}
// 			</main>
// 			<Footer className='  min-h-fit' />
// 			{/* </div> */}
// 		</div>
// 	)
// }
