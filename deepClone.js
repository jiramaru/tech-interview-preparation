export default function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value; // primitives: null, boolean, number, string
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const result = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
}

