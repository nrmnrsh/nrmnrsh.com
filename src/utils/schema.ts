/**
Wraps substrings with `<span itemprop="...">`, based on a map of itemprop -> substring.
*/
export function schema(schemas: Record<string, string> | undefined, string_ = ''): string {
  let result = string_;

  for (const prop of Object.keys(schemas ?? {})) {
    const value = (schemas!)[prop];
    result = result.replace(value, () => `<span itemprop="${prop}">${value}</span>`);
  }

  return result;
}
