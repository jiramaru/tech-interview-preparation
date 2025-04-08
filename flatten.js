export default function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursion
    } else {
      result.push(item);
    }
  }

  return result;
}

