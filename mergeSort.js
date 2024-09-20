export function mergeSort (array) {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)

  const sortedLeft = mergeSort(array.slice(0, mid))
  const sortedRight = mergeSort(array.slice(mid))

  return merge(sortedLeft, sortedRight)
}

function merge (left, right) {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  while (i < left.length) {
    result.push(left[i++])
  }

  while (j < right.length) {
    result.push(right[j++])
  }

  return result
}
