export const countOccurrences = (array, value) => {
  var count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

export const flatten = (arr) => {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

export const shuffle = (original) => {
  const a = [...original] // clone list
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
