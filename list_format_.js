// 2/4 - is to be correctec


/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options={}) {
    let result = [...items];

  // Apply uniqueness
  if (options.unique) {
    result = [...new Set(result)];
  }

  // Apply sorting
  if (options.sorted) {
    result.sort();
  }

  // Apply length trimming
  const length = options.length;
  if (typeof length === 'number' && length > 0 && result.length > length) {
    const visible = result.slice(0, length);
    const remaining = result.length - length;
    const plural = remaining === 1 ? "other" : "others";
    return `${visible.join(", ")} and ${remaining} ${plural}`;
  }

  return result.join(", ");
}


