import { fibonacci } from './fibonacci.js'
import { mergeSort } from './mergeSort.js'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const main = () => {
  console.log('\nChose the following options: ')

  rl.question('Fibonacci (1)    Merge Sort (2)     Quit (3): ', (number) => {
    number = Number(number)
    if (number === 1) {
      console.log(fibonacci(10))
      askToTryAgain()
    }

    if (number === 2) {
      console.log(mergeSort([4, 2, 6, 1, 7, 3, 5, 8, 9, 0]))
      askToTryAgain()
    }

    if (number === 3) rl.close()
  })
}

function askToTryAgain () {
  rl.question('\nTry Again? y/n: ', (choise) => {
    if (choise.toLowerCase() === 'y') main()

    else {
      console.log('Goodbye!\n')
      rl.close()
    }
  })
}

console.log('Welcome to Recursion Exercises!')

main()
