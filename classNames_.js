// 2 out of 4 - Need a review

export default function classNames(...args) {
  const result = [];

  for (const arg of args) {
    if (!arg) continue;

    const type = typeof arg;

    if (type === "string" || type === "number") {
      result.push(arg);
    } else if (Array.isArray(arg)) {
      result.push(classnames(...arg)); // flatten and recurse
    } else if (type === "object") {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          result.push(key);
        }
      }
    }
  }

  return result.join(" ");
}
