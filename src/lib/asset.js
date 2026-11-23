export function asset(path) {
  if (!path) return path
  if (path.startsWith('/') || path.startsWith('http') || path.startsWith('data:')) return path
  return `/${path}`
}
