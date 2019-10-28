function shuffle (a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return [...a] // clone the array
}

function searchForArray (haystack, needle) {
  var i, j, current
  for (i = 0; i < haystack.length; ++i) {
    if (needle.length === haystack[i].length) {
      current = haystack[i]
      for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if (j === needle.length) { return true }
    }
  }
  return false
}

// const names = ['Stef', 'Ken', 'Chris', 'Doug', 'John', 'Santhosh', 'Nicole', 'Matt', 'Julie']
const names = ['Stef', 'Ken', 'Chris', 'Doug']

const goodCombinations = []

let attempts = 0
while (goodCombinations.length !== 3 && attempts < 100) {
  attempts++
  const newOrder = shuffle(names)
  if (!searchForArray(goodCombinations, newOrder)) {
    // slice into pairs, check all pairs are unique
    goodCombinations.push(newOrder)
  }
}

console.log(goodCombinations)

console.log('---'.repeat(12))
