/**
 * Compare two arrays (of any dimensions) and returns true if they are equal
 * @param array1 first array to be compared
 * @param array2 second array to be compared
 */
function compareArrays(array1: any[], array2: any[]): boolean {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    return array1 === array2
  }
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0, len = array1.length; i < len; i++) {
    if (!compareArrays(array1[i], array2[i])) {
      return false
    }
  }
  return true
}

export default compareArrays
