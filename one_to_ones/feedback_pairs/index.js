import combinations from 'combinations'
import { countOccurrences, flatten, shuffle } from './arrays'
import { getConsoleOutput } from '@jest/console'

export const makePairs = (names) => {
  return combinations(names).filter((e) => e.length === 2)
}

export const timesScheduled = (person, pairings) => {
  const flattenedPairings = flatten(pairings)
  return countOccurrences(flattenedPairings, person)
}

export const findSessions = (meetingsDesired, maxOccurences, availablePairings) => {
  let attempts = 0
  while (attempts < 10000) {
    attempts++
    const proposedScheduled = shuffle(availablePairings).slice(0, 2)

    if (countOccurrences(flatten(proposedScheduled), 'a') === maxOccurences &&
  countOccurrences(flatten(proposedScheduled), 'b') === maxOccurences &&
  countOccurrences(flatten(proposedScheduled), 'c') === maxOccurences &&
  countOccurrences(flatten(proposedScheduled), 'd') === maxOccurences) {
      return proposedScheduled
    }
  }
}
