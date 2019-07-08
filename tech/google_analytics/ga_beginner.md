# Beginner

Advice: Check your content language all the way through the customer journey
GA Session lasts 30 minutes before it's new

Accounts:
 * Can be grouped under an "organization" if you have multiple
 * Accounts
   * Account has Properties, which have views
   * Account can have multiple properties, properties can have multiple views
 * Properties
   * Tracking code is at property level (can split by device, geo, anything really). Cannot aggregate
   * Tracking code goes right after the <HEAD>
 * Views
   * Views are properties with filters applied to them
   * Views are a good place to split by region or what have you
   * e.g. Filter can exclude internal traffic
   * Goals are at view level (track conversions or biz objectives)
   * New views don't get old data
 * Permissions
   * Can be done at view/property/account level
  
Views:
 * Max 25 views
 * Some pre-defined filters like by ip address for internal traffice
 * Make a raw view, then make others (without bots)
 * filters are applied in order
 * Create a test view to test filters before applying them. You can preview filtering results on the last 7 days of data
 * Folk number views to make them appear in order

The tool:
 * Segments: A pre-made filter you can apply (social, tech, first visit)
 * Metrics can be added to line charts
 * You can annotate the graph with a little line at the bottom
 * User has multiple sessions
 * Pageviews are number of pages: User > session > pageview. Pageview isn't a unique filter.
 * Bounce rate is folk that took no action and left

Dimensions:
 * Attribute of a data set, that can be organised to do better analysis
 * Often paired with metrics which are the actual numbers in a data set
 * e.g. "country", "city". You can add second dimesions
 * You can search on dimensions

Sharing:
 * Drop down to enable sending once a month
 * Can create custom reports and choose "faster" over accurate if big

Dashboard:
 * Can be private
 * Can be filtered
 * 20 private dashbaords per user. 50 per view
 * Can share as a template
 * Solutions Gallery has custom dashboards

Acquisition
 * Medium: How folk get to your site. 
 * Organic == non paid search, CPC == paid search, referral == non search engine, none/direct == typed url
 * bounce rate is a measure of quality

Behaviour
 * Average session length and bounce rate are a good indicator of good and bad pages
 * content-drilldown groups by url parts
 * Landing page report useful for knowing where folk come from and bounce
 * Events need more code to track

Campagins
 * Tracking how well different marketing things worked.
 * UTM Link Tags: Medium (how => email), source (where from => google) and campaign (free text identifier). 
 * Bonus tags: Content (sub category, AB test), Term (paid search keywords)
 * URLBuilder helps make these links
 * Tags are case sensitive
 * Display source means banner ad

Goals
 * Aka Biz goals. Need to be admin to create. 20 goals per view
 * Admin -> View -> Goals
 * Goals have slots with ids
 * Goals can be: destination, duration, pages, events
 * Funnels are on destinations
 * Funnels
   * You can verify them
   * Values on these goals are only useful if the value is consistent
   * As well as 'conversions' goals crop up in acquisition and audience repots
   * There's a marketplace for goals

Google ads
* Banner ads are "google display network"
* Adwords is another account

Optimizer
 * Statistical significance tester: https://neilpatel.com/ab-testing-calculator/
 * A good test does:
   * At least two weeks of data (some say 3 or 4)
   * Achieved pre-calculated sample size: https://www.optimizely.com/uk/sample-size-calculator/
   * Statistical significance of 95%
   * Different menus and landing pages (with words your customres use) are more effective then colour changes
