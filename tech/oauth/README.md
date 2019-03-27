# Agenda

Auth vs Auth
Service with no auth
Service with basic auth (Authorisation header is rarely cached)
Service with access key (host of benefits. granular, can redact, doesn't expose main account)
http vs https (show hops)

SSO (http://localhost:5100/login?clientId=api_demo&scope=api_demo&redirectUri=https://httpbin.org/get)
Third Party - OAuth 1 (folk just gave their creds away)
Third Party - OAuth 2 - Mobile apps needing browser (flow change)
OAuth - Roles
OAuth - Flows (and choosing them)

Opaque vs Transparent tokens (symetric vs asymentric)

## What do you want to know?

* Background
* everything
* Basic understanding
* Authorisation in general
* How it works
* scopes in JWT
* JWT - parts 
* JWT securing
* JWT proving in JSON
* renewing tokens
* weakenesses in OAuth (Facebook example)
* Flow - and when to use ()
* Security of parsing JSON
* LDAP

## Links

* https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_Cheat_Sheet_for_Java.md
* History: https://auth0.com/blog/everything-you-wanted-to-know-about-oauth-2-but-were-too-afraid-to-ask/
* https://aaronparecki.com/oauth-2-simplified/
* How to hack it: https://security.stackexchange.com/questions/133065/why-is-it-a-bad-idea-to-use-plain-oauth2-for-authentication
* https://hueniverse.com/oauth-2-0-and-the-road-to-hell-8eec45921529 two main goals — security and interoperability
* SPA best practices: https://tools.ietf.org/id/draft-parecki-oauth-browser-based-apps-02.txt
* PKCE, pronounced "pixy"
* JWT breakdown: https://hackernoon.com/json-web-tokens-jwt-demystified-f7e202249640

# Flow

User goes to your web-server to login and is presented with a username and password and a "Login with Google" button.
The user clicks on the button which takes them to Google with a callback-URL.
If the user has not done so already, Google presents some sort of "Do you want to login to this site..." type of information and asks for user confirmation.
The user either confirms or denies the auth request.
Google redirects the user back to your web-server with an auth-code using the callback-URL provided.
If approved, your web-server code needs to call directly to Google to validate the auth-code, not using the user's browser from a CGI script or controller.
Google returns an access-token and JWT token information.
You can then decode the JWT token.
The JWT token can then be verified against Google's published signatures, and you can do other things with the access-token over time.