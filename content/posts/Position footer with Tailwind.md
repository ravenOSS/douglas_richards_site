---
title: Footer positioning with Tailwind
slug: Markdown-Unordered-List
date: January 15, 2022
createdAt: January 12, 2022 3:49 PM
author: Douglas Richards
excerpt: Getting a footer to stay at the page bottom is a common problem.
thumbnail: 'https://res.cloudinary.com/raveniot/image/upload//v1619638137/squares_pwjy6f.jpg'
heroImage: 'https://res.cloudinary.com/raveniot/image/upload/v1619638137/squares_pwjy6f.jpg'
exampleImage: ''
---

By using a flexbox container, we can arrange our pages so that the navbar correctly positions to the top of the page and the footer is positioned at the bottom of the page (or the bottom of the content if it is greater than the screen height).

Using flex-grow or flex-grow-1 on the content will allow the content to expand to fill the remaining space.

If the page content itself is not large enough to fill the remaining space, the footer will still be positioned at the bottom of the page.

Note that although the title of the post includes Tailwind, the method is available in any CSS framework using flex layout.

When creating an encapsulating layout component, it is important to use the

```
flex

flex-col
```

properties.

Then use the

**flex-grow**

```
flex-grow
```

property on the element that needs to expand to fill the vertical space remaining after the other page element's sizes have been calculated and push the footer to the bottom of the page.

```
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen width-full'>
			<Navbar />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	)
}
```

Of course, to use this layout, you'll need to wrap the main app in the layout.

```
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
```

The main tag is semantic html and is used to indicate the main content of the page.

```
<div class="flex flex-col min-h-screen">
  <header class="p-2 bg-indigo-200">Header</header>
  <main class="flex-1 p-2 bg-indigo-50">
    <div class="mb-20">Content</div>
  </main>
  <footer class="p-2 bg-indigo-200">Footer</footer>
</div>
```
