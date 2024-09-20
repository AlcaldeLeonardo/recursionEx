export function fibonacci (n, array = [0, 1], index = 0) {
  if (n === 0) return 'No elements to show'
  if (n === 1) return 0
  if (n <= 2) return array

  array.push(array[index] + array[index + 1])
  return fibonacci(n - 1, array, index + 1)
}
