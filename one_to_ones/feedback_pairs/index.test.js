/* eslint-env jest */
import 'jest-matcher-one-of'
import { makePairs, findSessions, timesScheduled } from './index'

test('can find the unique combinations to offer feedback', () => {
  expect(makePairs(['a', 'b', 'c', 'd'])).toStrictEqual([
    ['a', 'b'],
    ['a', 'c'],
    ['a', 'd'],
    ['b', 'c'],
    ['b', 'd'],
    ['c', 'd']
  ])
})

test('can filter list to only include a person twice', () => {
  expect(findSessions(1, 1, [
    ['a', 'b'],
    ['a', 'c'],
    ['a', 'd'],
    ['b', 'c'],
    ['b', 'd'],
    ['c', 'd']
  ])).toBeOneOf(
    [
      [['a', 'b'], ['c', 'd']],
      [['a', 'c'], ['b', 'd']],
      [['a', 'd'], ['c', 'b']],

      [['c', 'd'], ['a', 'b']],
      [['b', 'd'], ['a', 'c']],
      [['b', 'c'], ['a', 'd']]
    ]
  )
})

test('knows how many times a person is scheduled', () => {
  expect(timesScheduled('a', [['a', 'b'], ['a', 'c']])).toBe(2)
  expect(timesScheduled('b', [['a', 'b'], ['a', 'c']])).toBe(1)
  expect(timesScheduled('c', [['a', 'b'], ['a', 'c']])).toBe(1)
  expect(timesScheduled('d', [['a', 'b'], ['a', 'c']])).toBe(0)
})
