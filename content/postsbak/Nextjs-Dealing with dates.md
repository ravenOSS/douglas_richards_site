---
title: Dealing with dates in Next.js
slug: markdown
date: May 15, 2022
createdAt: May 15 2022 3:49 PM
author: Douglas Richards
excerpt: Date object is not serializable.
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
imagealt: 'elevator mineshaft'
---

https://www.jamesperkins.dev/post/next-date-type-data-fetching

Error: Error serializing `.user.subscription_end_date` returned from `getServerSideProps` in "/".
Reason: `object` ("[object Date]") cannot be serialized as JSON. Please only return JSON serializable data types

yarn add babel-plugin-superjson-next superjson

{
"presets": ["next/babel"],

    "plugins": ["superjson-next"]

}

https://flaviocopes.com/nextjs-serialize-date-json/

export async function getServerSideProps() {
let cars = await prisma.car.findMany()

cars = JSON.parse(JSON.stringify(cars))

return {
props: {
cars,
},
}
}
