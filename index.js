// on click perform this fun
const checkEntry = () => {
  // first: inter a number

  const userEntry = prompt('Please Enter a numer')

  // fun : check if is multiples of 3 returne const isThreemultiple = true
  const isThreemultiple = (i) => {
    return i % 3 === 0 ? true : false
  }
  // fun : check if is multiples of 5 returne const isFivemultiple = true
  const isFiveultiple = (i) => {
    return i % 5 === 0 ? true : false
  }
  // loop throgh numbers from 1 to this number on a loop
  // if tow const is true => Fizzbuzz --- else if isThreemultiple print fizz ---- else if isFivemultiple print buzz ---- else print number
  for (let i = 1; i <= userEntry; i++) {
    let fizbuzz = isFiveultiple(i) && isThreemultiple(i)

    fizbuzz
      ? console.log('fizbuzz')
      : isThreemultiple(i)
      ? console.log('fizz')
      : isFiveultiple(i)
      ? console.log('buzz')
      : console.log(i)
  }
}
