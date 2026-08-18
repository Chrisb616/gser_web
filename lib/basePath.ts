/** Prefix a public asset path with the app basePath (needed for GitHub Pages). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
