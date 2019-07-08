# Google Analytics Advanced

## Data Collection

* GA creates a cookie per apex domain. Need to setup "cross domain tracking" to work across different Apex domains
* Example "hit" from a GA: https://www.google-analytics.com/r/collect?v=1&_v=j77&a=1055085779&t=pageview&_s=1&dl=https%3A%2F%2Fwww.codecraftuk.org%2F&ul=en-gb&de=UTF-8&dt=CodeCraft%20-%20CodeCraft%20UK&sd=24-bit&sr=1920x1080&vp=1905x312&je=0&_u=IADAAEAB~&jid=1244184072&gjid=677198265&cid=1410039239.1556711246&tid=UA-55670018-1&_gid=2118565854.1562580455&_r=1&z=1556147127
* Has language, page title, screen rez, analytics ID, cid=random_user_identifier
* Analytics.js has two cookies. One for checking returning visitors, one for the session
* Hit types
  * Pageview hit (on page load)
  * Event hit (for elements that aren't an anchor). They have these categorization parts:
    * Action
    * Category
    * Label
    * Value
  * Transation hit (ecommerce hit: pass the sku, price)
  * Lesser one: Social hits (like, shares), PageTiming hits

## Users and sessions

* Categorizes new vs returning users, goes to sessions and adds "other data sources"
* Each device is unique, same user is not tracked on mobile and desktop.
  * Can use UserID feature to track across devices
* Sessions last 30 mins. But can be reconfigured (e.g. video sharing sites)
* "Other Data": Measurment protocol and account linking
  * Measurement Protocol: Send hits from your internal systems
  * Account Linking: Adwords, Adsense

## Config settings

* Filters are rules. Can filter to include and exclude. Also can replace data
  * e.g. filters: by country, without internal users
* Goals:
  * Destination: user lands on a certain page
  * Event: user performs action
  * Lesser: Duration (sessions over a set limit), Pages/per session (set amount of pages)
  * Conversions are counted once per session, per goal
* Can group things by channel or content groupings
* Custom dimensions and metrics
  * CD: Specific dimensions to you. Can be used in reports or as a segment
  * CM: 
* Can upload your own hit data

## Storing data

* Google stores dimenstions like country, reports add metrics. Rows are dimensions, Columns are metrics
* Page time: calculatd by diffing the pageview events
* Dimensions and metrics can have one of three scopes (only needed for custom dimensions):
  * hit-level: (e.g. page title)
  * session-level: (e.g. device category)
  * user-level:  (e.g. user type)
* Custom reports data: Sampled data is calculated at the property level (view filters don't affect data size)

## Measurement plan

* Macro conversions: are the broaded goals (like purchase complete). 
* Micro conversions: Smaller goals are email signup, coupon signup -> Nudges
* Other examples: Macro: Singup to newsletter, Micro: Follow on social media
* These lead to a measurement plan which has: Objective -> Strategy -> Tactic -> KPI (https://analytics.google.com/analytics/academy/course/7/unit/1/lesson/5)

# Data Collection and config

## Organise an account

* Every property should have at least three views: Raw, Test, Master
  * Master: filter internal traffic, lowercase urls, no bots
  * Raw: no filters. Backup, can be copied in case something goes wrong
  * Test: Copy of master, try filters here first.
* Recommend tracking mobile and web separately
* Cross domain tracking aka Site linking. This is an extra bit of code in the webpage
* Analytics 360 allows merging of properties (mobile + website): Known as a "roll up property". Also a bit of tracking code

## Advanced filters on views

* Filters can do things like create a view just for a subdomain.
* Predifined and custom filters.
  * Custom: Good for lowecaseing things. Only including Mobile devices. Only one campaign (good for sharing with external partners)
  * Can drop query params
* Can be a time period before filters become active

## Custom Dimensions

* Add upon "default dimensions". Add CDs from extra tracking data
* Done at property level. Custom definitions -> Custome dimensions
  * CD has name and scope (how broad)
  * CD gets a slot number (like goals)
* GTM helps here aparently
* CD are sent with pageview hits
* CD are secondary dimensions on built in reports. Can be primary on custom
* Limits: 20 for plebs. 200 for Analytics 360 users.
* 360 is £150k a year!

## Custom Metrics

* They have: name, scope (hit or product), formatting type (int, money/decimal, time), min & max.
* You get code to add onto your website
* Dimension: describes data, Metric: measures data - they increment
* Examples: https://thenextweb.com/insider/2016/09/27/24-examples-google-analytics-calculated-metrics/
* Example: Avg Cost per session, non-bounce rate, time spent watching a video, high score in a game 

## Events

* Track clicks. Need start and end events for videos
* Event params: category (video), action (play | pause), label (myvideo.mp4) and value (timeToLoad)
* Category groups things, action is what the user did, label is optional to further describe the thing, value is optional numberic value
* Report is at: Behaviour -> Events
* Can use events for outband link clicks. Cat "Outband Links", act "Live Chat", lab "{page_cliked_from}"

## Bonus (UserID)

* Set extra tracking code of "userId". 
* Can merge pre-logged in data in sessions if turned on session unification
* Create user-id view as part of the flow. Call it "User ID View"
* You get less data, as anon is missing, but can track across devices
* The view has a "Behaviour -> User-ID Coverage" report. Audience gets "Cross device reports"

# Advanced Analysis Tools and Techniques

## Segmentation

* Can use multiple in charts: convertors vs non-convertors