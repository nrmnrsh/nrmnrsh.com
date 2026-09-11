/**
Converts a string into a URL-safe, lowercase, hyphen-separated id.
*/
export function slug(value: string): string {
  return value
    .normalize('NFKD')
    .replaceAll(/[\u{0300}-\u{036F}]/gv, '')
    .toLowerCase()
    .replaceAll(/[^0-9a-z]+/gv, '-')
    .split('-')
    .filter(Boolean)
    .join('-');
}
