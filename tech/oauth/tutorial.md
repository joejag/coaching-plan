# Tutorial

* Wide open
 * Context: Humans interacting 
 * Intro cards: Resource Owner, Resource Server, Hacker
 * Code demo: Express with no protection (cmd line + browser)
 * http -v http://localhost:3000/users (WWW-Authenticate header)
 * Aside: Etags, 304 Not Modified
 * Human demo: Legit user asks got info, 
 * Hacker: how they can get to it?
 * Principle: Protect against money&data theft and prevent folk from wrecking your system

* Basic Auth
 * Context: Humans interacting
 * Code demo: Express with basic auth (cmd line + browser)
 * http -v http://localhost:3000/basic
 * http -v --auth u:p http://localhost:3000/basic (point out base64 header, also rarely cached)
 * Browser example (show always sends the creds)
 * Human demo: 401, give card
 * Hacker: Options? sniff, shoulder-surf, guess
 * Principle: Minimise sending of secrets

* Session based
 * Context: Humans interacting
 * Why: Allows you to use a login form. Allows logout. Don't resend things 
 * Code demo: Express with cookies (cmd line + browser)
 * http -v --auth u:p http://localhost:3000/cookied (notice cookie)
 * http -v http://localhost:3000/cookied Cookie:oreo=5106
 * http -v --auth u:p --session mysesh http://localhost:3000/cookied
 * Browser does the same thing
 * Human demo: Exchange token instead of username and pass
 * Hacker: Options? sniff

* Access Key based
 * Context: API 
 * Why? User+Password with limited scope. (granular access, can redact, can rotate, doesn't expose main account, AWS IAM does this)
 * Code demo: Express with access keys (cmd line + browser)
 * http -v http://localhost:3000/accesskey token:somethingVeryVeryLong (Stripe do this as basic auth)
 * No browser for this
 * Human demo: Request access for read (200), request access for write (403)
 * Hacker: What you got? sniff (no longer in browser so less attack surface)
 * sudo ngrep -d lo token
 * Principle: Encrypt transport

* Single Sign on
 * Context: You have multiple services
 * Why? Limit what needs access to passwords (plus resetting etc), better UX
 * Diagram?

* OAuth

* Transparent tokens