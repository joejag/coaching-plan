# Tutorial

* Wide open
 * Context: Humans interacting 
 * Intro cards: Resource Owner, Resource Server, Hacker
 * Code demo: Express with no protection (cmd line + browser)
 * http -v http://localhost:3000/users
 * Aside: Etags, 304 Not Modified http -v http://localhost:3000/users 'If-None-Match:'
 * Human demo: Legit user asks got info, 
 * Hacker: how they can get to it?
 * Principle: Protect against money&data theft and prevent folk from wrecking your system

* Basic Auth
 * Context: Humans interacting
 * Code demo: Express with basic auth (cmd line + browser)
 * http -v http://localhost:3000/basic (WWW-Authenticate header)
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
 * Why? Limit what needs access to passwords (plus resetting etc), better UX. Same Origin Policy
 * Arrange cards to show the process, first without login, then with 

* OAuth (SSO)
 * Context: Let's use OAuth to standardise this a bit
 * https://256stuff.com/gray/docs/oauth2.0/
 * Why? Tools are hardcorded, some have vunrabilities you can accidently expose. Bit easier to integrate.
 * Human run thourgh - just Joe
 * http://localhost:5100/login?clientId=api_demo&scope=api_demo&redirectUri=https://httpbin.org/get
 * => Grab auth code
 * EMI120jxWJc2vv2r2nN8
 * http http://localhost:5100/api/v1/token authCode='rtob0eOapaGIokddquT4' clientId='api_demo' clientSecret='api_demo_secret' redirectUri='https://httpbin/get'
 * => Notice access code

* OAuth (service to service)
 * Context: No humans, service A calls B
 * http POST http://localhost:7041/oauth/token?grant_type=client_credentials --auth example:some_password
 * OAuth Flows: AuthorisationCode and ClientCredentials
 * OAuth 2: Easier to use, allowed mobile phone and SPA to use OAuth

* OAuth (third party)
 * Context: External to company service wants to do something (Twitter client)
 * Context: Previously folk shared their passwords with external tools
 * Human demo: Flow
 * Can use authorization server as it's own identity provider
 * This is the flow you use to register with ROSA (auto approve)
 * OAuth doesn't do auth, just part of it (OpenID connect)

* Transparent tokens
 * Context: Things get chatty, also not redundant
 * Opaque vs Transparent tokens 
*  http POST http://localhost:7041/oauth/token?grant_type=client_credentials --auth example:some_password (notice the two dots)
 * Go to jwt.io (anatomy - body doesn't have to be JSON)
 * Symmetric, Asymmetric Public key http://localhost:7041/jwks.json
 * SAML same in XML, bloated and hard to use
 * Can't revoke easily
