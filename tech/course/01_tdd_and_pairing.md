# TDD 1

Lessons:

 * TDD Laws: Unit test tests one thing, prod code must have failing test, don't write more than that
 * Three phases: Fake it, obvious solution, triangulate (once three appearances),
 * Give test names by what they do (increase speed when accelator presssed) - so their names keep after refactoring
 * Failure messages should be good. 
 * Use shameless green, get to refactor quickly
 * Rule of Three for duplication

Exercises:

 * Kata on bowling, fizzbuzz, leap years

Complete when:

* TDD procedural problems. Write tests before code, simple impls, spot duplication and refactor it
* TDD Phases: fake, obvious, triangulate

# TDD 2

Lessons:

 * Arrange, Act, Assert. Two blank lines. Ideally one line for each part (make it easy to understand, avoids mixing order)
 * Write assert first, then act, then state, then name the test
 * Principles of tests
   * Fast (in ms)
   * Isolated (no dependency between tests)
   * Repeatable (No dependency on external state)
   * Self-validating (red or green, no reading console output)
   * Timely (written at the right time - first)

Exercises:

* Anagrams, StatsCalculator, TCR something with 2 mins inbetween to think max
