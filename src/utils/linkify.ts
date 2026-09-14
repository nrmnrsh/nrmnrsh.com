/**
Replaces label substrings with anchor tags, based on a map of URL -> label.
*/
export function linkify(links: Record<string, string> | undefined, string_ = ''): string {
  let result = string_;

  for (const href of Object.keys(links ?? {})) {
    const label = (links!)[href];
    const isExternal = /^https?:\/\//v.test(href);
    result = result.replace(
      label,
      () => `<a href="${href}"${isExternal ? ' rel="noopener noreferrer" target="_blank"' : ''}>${label}</a>`,
    );
  }

  return result;
}
