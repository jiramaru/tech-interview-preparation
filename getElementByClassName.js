/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
    const result = [];
  const requiredClasses = classNames.trim().split(/\s+/);

  function traverse(node) {
    for (let child of node.children) {
      const childClasses = child.className.trim().split(/\s+/);
      const hasAllClasses = requiredClasses.every(cls => childClasses.includes(cls));

      if (hasAllClasses) {
        result.push(child);
      }

      traverse(child); // recursively check descendants
    }
  }

  traverse(element);
  return result;
}
