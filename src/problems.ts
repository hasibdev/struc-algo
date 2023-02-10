interface Lookup {
  [key: string]: number
}

function romanToInt(s: string): number {
  const lookup: Lookup = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

  let result = 0
  for (let i = 0; i < s.length; i++) {
    const curr = lookup[s[i]]
    const next = lookup[s[i + 1]]

    if (curr < next) {
      result += next - curr
      i++
    } else {
      result += curr
    }
  }

  return result
};

function intToRoman(num: number): string {
  const lookup: Lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  let result = ''

  for (const [key, value] of Object.entries(lookup)) {
    while (num >= value) {
      result += key
      num -= value
    }
  }

  return result
}


function reverse(x: number): number {
  let result = 0
  let negative = false

  if (x < 0) {
    negative = true
    x = -x
  }

  while (x > 0) {
    console.log(x)

    console.log(result)
    const pop = (x % 10)
    console.log(pop)

    result = result * 10 + pop
    console.log(result)

    x = Math.floor(x / 10)
    console.log(x)
  }

  if (negative) {
    result = -result
  }

  if (result < -2147483648 || result > 2147483647) {
    return 0
  }

  return result
};


export { }