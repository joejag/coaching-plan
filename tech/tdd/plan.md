Why bother with TDD?

* Any time when you shouldn't?

What's the benefit of TDD?

* Productivity
* Regression test

Do you know about Red Green Refactor?

Do you know about the two schools of thought on TDD?

Chicago:
 * You are not allowed to write any production code unless it is to make a failing unit test pass.
 * You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
 * You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

    Tests are specific examples, Code are rules. Move forward towards the general solution

Demo (FizzBuzz? LeapYear?)
 * Fake it > Obvious > Trangulation (crossing the river stepping on stones, don't jump!)
 * TestNames are business, not technical
 * Fine to have multiple asserts, as long as we are testing one behaviour
 * Say whether you think a test will fail
 * Duplication (three times and it is out)
 * refactor (80% better readability, 20% for design)

http://codemanship.co.uk/parlezuml/blog/?postid=1157
https://xnsio.com/services/training/test-driven-development
https://softwareengineering.stackexchange.com/questions/111837/relation-between-bdd-and-tdd
Sensei says: https://www.artima.com/weblogs/viewpost.jsp?thread=203994

Myths:
 * You must have 100% code coverage!
   * FrontEnd
   * Useless tests
   * Upper 80-90s probably good enough. 100% is very suspicious 
 * You don't need to do any up front design!
   * You can design without TDD, it requires thought
   * How major parts are structured and communicate
 * Code quality of tests is less important than production code
   * 
 * If I use TDD I only need unit tests!
   * Risk that it doesn't actually work altogether
   * Doesn't mean it meets the requirements, or have the wrong assumption about a requirement
 * If you don't use TDD you are a bad developer/engineer!
   * It takes practice
   * You can write great code without it.
   * Took me a year to get it
   * Is the code easy to understand? Am I afraid to change it? 
 * Writing test cases before the code, is not feasible
 * Employing TDD is a time-consuming process
 * TDD is a software design method for better design
 * TDD always ensures complete code coverage
   *  “The best TDD can do, is assure that code does what the programmer thinks it should do. That is pretty good BTW.” 
*  Each test should only have one assert
*  TDD replaces testing
*  The business would not approve of writing unit tests
    * Biz dones't care, they want their stuff
* You should always refactor after making a test pass
* Everything needs unit tests
* Never trust a test you've not seen fail

Studies
 * 40-80% fewer bugs: https://www.computer.org/csdl/mags/so/2007/03/s3024.pdf
 * 4 projects at IBM and MS used

Two rules for TDD:
- Write only enough of a unit test to fail.
- Write only enough production code to make the failing unit test pass.

