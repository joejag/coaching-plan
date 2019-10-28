/* eslint-env jest */

import { makePairs } from './index'

test('it works', () => {
  expect(makePairs(['a', 'b'])).toStrictEqual(['a', 'b'])
})
