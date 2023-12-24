interface MyObject {
  [key: string]: unknown
}

/**
 * Compares two objects and returns an object containing only the key-value pairs
 * that have changed between the two objects.
 *
 * @param {MyObject} obj1 - The first object for comparison.
 * @param {MyObject} obj2 - The second object for comparison.
 * @return {MyObject} - An object containing the changed key-value pairs.
 */

export function getChangedProperties(obj1: MyObject, obj2: MyObject): MyObject {
  const changed: MyObject = {}

  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
      changed[key] = obj2[key]
    }
  }

  return changed
}
