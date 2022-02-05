export function staticLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
