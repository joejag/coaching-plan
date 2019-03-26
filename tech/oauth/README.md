# Agenda

Auth vs Auth
Threat tree (steal data or money, wreck the system)
Service with no auth
Service with basic auth (Authorisation header is rarely cached)
Service with access key (host of benefits. granular, can redact, doesn't expose main account)
http vs https (show hops)
Second app login (introduce LDAP)
SSO
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