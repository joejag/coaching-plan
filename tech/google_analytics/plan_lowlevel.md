# Part 1

## Content: Basic Reports and Sessions

Understanding reports    
    * Sessions, Bounce Rate
    * Acquisition, Audience, Behaviour, Realtime

## Exercise: Challenges to do with Audience, Acquisition, Behaviour and Segments

For the date range: May 1st to June 31st 2019

* Audience
  * Geo > Location, which region brought in most users? Are folk in Edinburgh or glasgow more likely to use a mobile with the site?
  * Mobile Overview > What's the split between mobile and desktop?
  * Are more people using Amazon Kindle or IE 7-10?

* Acquisition
  * Who are the top five referrers?
  * What are the top five search terms used in Google to find ScotLIS?
  * What's the top social networks linking to ScotLIS?
  * Which reddit thread linked to ScotLIS?

* Behaviour
  * B > SC > All Pages: What's the most used page after the homepage?
  * B > SC > Content Drilldown: Which content section had the most unique pageviews?
  * B > SC > Exit Pages: Are people more likely to leave after a property search or a prices search?
  * B > SS > Page Timings: What's the worst performing page for loading? What does google suggest to do to improve it?

* Segments
  * Add Mobile vs Desktop/Tablet traffic: Is there any difference in when they use the site?
  * Or Organic vs Direct: Find two interesting things in audience and behaviour


# Part 2

## Content: Tracking pages and events

Tracking pageviews and events
    * Tracking code
    * Sending events
    * Custom Dimensions

## Exercise: Setup a site with GA. Send an event on button click.

Need access to GA to create a new property

### Get the server deploying

`yarn dev`
`yarn deploy` # Need Zeit Now account to work

### Create a GA account

Google Analytics -> Admin -> Create Account
Call it your name
(don't link to RoS)
add URL for Now, call it "Analytics workshop demo" (be super careful that it's the right url)
set timezone to UK
Accept the masses of legal stuff

### Hook up the tag

Add your gtag to the Layout.js:
 * <script dangerouslySetInnerHTML
 * Or use a package to do it
Deploy
See the "Real Time" reports. Others won't work until tomorrow.

### Send an event when the user clicks on something

https://developers.google.com/analytics/devguides/collection/gtagjs/events
Add onto the 'About' page when someone clicks 'sign up' to mailing list

# Part 3

## Content: Views, Accounts and Properties

View
    * (Organisation), Account, Property, View
    * View best practices and filters

## Exercise: Create three views (master, raw test)

Add bonus view for mobile only traffic

* Rename "All Web Site Data" to "Raw Data" (you need to reload to see this change)
* Go to "View settings" and choose "copy view", name is Master (make sure removal of bot traffic is included)
* Add a lowercase filter to the Master View (Admin >> View >> Filters)
* Add an ip exclude to the Master View 194.34.* on IP Address (custom filter, predefined don't work with ranges)
* Have a look at the ScotLIS filters on the Master view.

# Part 4

## Content: Goals. Macro and Micro

Setting up goals
    * Macro vs Micro
    * Goal Funnels
    * GA destination goals

## Exercise: Create destination goal and funnel for your site



# Part 5

## Content: Experiments and Statistics

A/B testing
    * Statistics science

## Exercise: Design an experiment and figure out how you can measure it


# Part 6

## Content: Google Optimize

A/B testing
    * Google Optimize

## Exercise: Create A/B test for your site


# Stuff

https://developers.google.com/optimize/devguides/experiments

New app - next.js?
New ga account
setup goal of getting to buy page
Landing -> product -> purchase
Add cypress test to go through and drop off (add randomness to achieving goal)
setup variant in Google Optimizer
create variant which is better in app (plus randomizer)

Good link:
https://www.slideshare.net/MasterCertifiedTrainers/map-it-using-the-4-cs-to-design-and-deliver-great-training-8962691
