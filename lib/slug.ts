/**
 * Convert a heading like "Hva er DNS?" into a stable slug "hva-er-dns".
 * Used for in-page section anchors and table of contents.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
