---
title: Tailwind Experience
slug: Learning utility CSS
date: January 25, 2022
createdAt: January 14, 2022 3:49 PM
author: Douglas Richards
excerpt: Learning Tailwind has actually been a great learning experience for buiding CSS knowledge.
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
cardbg: bg-gray-300
cardtextcolor: 'white'
category: 'CSS'
---

The terse syntax of Tailwind constructs a steep learning curve and creates a reluctance to use it.

However, the great documentation combined with Tailwind Intellisense in the VSCode IDE quickly lowers the barrier to learning.

Even the example below of a Navbar quickly becomes a breeze to read and understand.

```
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='self-start min-w-full px-12 py-4 m-0 bg-gray-200 '>
			<div className='flex flex-col items-center bg-green-100 md:justify-around md:max-width-6xl md:flex-row'>
				<div>
					<h2 className='text-2xl font-extrabold text-gray-600'>
						Douglas Richards
					</h2>
				</div>
				<div className='flex flex-col md:flex-row'>
					<div className='px-1 text-center w-36 '>
						<Link href='/'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl '>
								About
							</a>
						</Link>
					</div>
					<div className='px-1 text-center w-36 '>
						<Link href='/bloglist'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl'>
								Blog
							</a>
						</Link>
					</div>
					<div className='px-1 text-center w-36'>
						<Link href='/profile'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl'>
								Author Profile
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
```

A widely voiced criticism of Tailwind is that all the CSS classes appearing on one line causes readability issues. Reading this on a mobile phone, its obvious that the line wrap makes reading difficult. Many ask for formatting similar to something like styled components. However, since Tailwind does not require the object like syntax of styled, each class appearing on a separate line would quickly detract from the readability of the code.

I have found that using either a conventional global css file or css modules requires continually jumping between editor panes. However, with the contained styling of Tailwind, its possible to have only a couple of tabs open at a time and be productive.

A caveat is that the temptation to add a lot of styles with @apply to tailwind.config results in effectively a bloated global css file negating a supposed advantage of Tailwind.

For classes not requiring reusability, the arbitrary value customization is simple to apply and remains an inline style.

Points of view

https://dev.to/brianboyko/tailwindcss-adds-complexity-does-nothing-3hpn

https://blog.logrocket.com/why-you-shouldnt-use-inline-styling-in-production-react-apps/

https://dev.to/neophen/tailwind-is-bad-because-i-don-t-like-it-24eh

https://dev.to/benface/tailwind-css-might-not-be-for-you-jk0
