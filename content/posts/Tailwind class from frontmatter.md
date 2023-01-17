---
title: Define Tailwind class in markdown frontmatter
slug: Tailwind Background
date: February 2, 2022
createdAt: February 1,2022 3:40 PM
author: Douglas Richards
issue: Setting colors in markdown frontmatter with Tailwind
solution: Define Tailwind class in markdown frontmatter
thumbnail: 'v1619638113/collapse_c1vfyl.jpg'
heroImage: 'v1619638113/collapse_c1vfyl.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
category: 'CSS'
exampleImage: ''
---

# Use frontmatter field to set Tailwind CSS class

How to use a markdown frontmatter field to set a Tailwind CSS class in a Nextjs project.

The Nextjs project is configured as a static site and uses <gray-matter> to parse the markdown file's frontmatter.

Trying to use interpolated Tailwind classes does not work. Tailwind uses regex algorithms to search for complete and recognizable Tailwind classes. An interpolated class such as

```
className={`loggedIn ${this.state.loggedIn ? 'bg-blue-[600 : 600]'}`}
```

So, by referencing a valid class embedded in the frontmatter, the className property will be set to the value of the frontmatter.

For this example, I'm using the <postColor> field to set the background color of the box.Let's say you want to give content authors the opportunity to set a background color to certain elements in their posts. We can provide a markdown frontmatter field to set a Tailwind CSS class in a Nextjs project. Note: options could be limited by using a dropdown.

As shown in the following example, the frontmatter field is used to set a background color for a post.

```
title: Use frontmatter field to set Tailwind CSS class
slug: Tailwind Background
date: February 2, 2022
createdAt: February 1,2022 11:40 PM
author: Douglas Richards
excerpt: Colorful?
thumbnail: 'v1619638113/collapse_c1vfyl.jpg'
heroImage: 'v1619638113/collapse_c1vfyl.jpg'
postColor: 'bg-orange-300'
exampleImage: ''
```

We can use the <postColor> field to set a background color for post elements and interpolate it into the <post> by integrating the Tailwind class using template literal syntax.

```
<h3 className={`mt-2 ml-2 text-sm font-bold text-gray-dark:text-gray-200 ${postData.data.postColor}`}>
	{postData.data.date}
</h3>
```

Where's the {postData.data.date} coming from? This is returned from getStaticProps() and getPostById in the [id].js component.

However, when rendered, the background color will not be applied to the post. Inspecting the element using DevTools, the utility class is present. But, upon closer inspection, the class, if present in the parent, is being inherited. What's going on?

The reason is that Tailwind scans the entire project for TW utility classes using regex and gathers all valid TW classes into a project CSS file ahead of the project build stage. So, because the project has not been built, the utility class interpolation has not yet completed. Tailwind does not create CSS with this class (unless it has been used elsewhere in the project).

```
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./content/**/*.{md,mdx}',
	]
}
```

The solution is to include the markdown posts directory into tailwind.config.js file. This causes Tailwind to scan the markdown posts directory for TW utility classes. Then, Tailwind can construct a project CSS file. When the project is built, the interpolated TW utility class has completed and it displays the correct background color.

A much less desirable solution is to use the Tailwind config file to set the background color as a XXXXX.
