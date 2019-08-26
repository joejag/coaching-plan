Diagrams should be able to stand alone. Narrative should complement, rather than explain it.

This happens:

* "We’ll talk through the diagrams."
* "This doesn’t make sense, but we’ll explain it during the presentation."

These don't work as long lived documentation.

# Common diagram problems

* Notation (e.g. colour coding, shapes, etc) is not explained or is inconsistent.
* The purpose and meaning of elements is ambiguous.
* Relationships between elements are missing or ambiguous.
* Generic terms such as “business logic” are used.
* Technology choices (or options, if doing up front design) are omitted.
* Levels of abstraction are mixed.
* Too much or too little detail.
* No context or a logical starting point.

When a collection of diagrams are created. These problems arise:

* The notation (colour coding, line styles, etc) is not consistent between diagrams.
* The naming of elements is not consistent between diagrams.
* The logical order in which to read the diagrams isn’t clear.
* There is no clear transition between one diagram and the next.

# Problems

* We lack a common, shared vocabulary with which to think about and describe the software systems we build.
* Component doesn't mean anything

# Observations

* Maps don't use a common notation. But you can use the key to figure it out.
* Diagrams help developers navigate complex code bases

# C4

## In short

* Software System/Context: Delivers value to users
* Containers: Application/Database, something running and separately deployable, communicates across network or process (microservice, mobile app, file system, shell script). Schemas are separate containers
* Component: Class collections. Not domain and util. Things like MVC bits.
* Class/Code: The code!

## Described

* Context: High level to set the scene. Key system deps and people
* Container: High level tech choices, their responsibilities, how they communicate
* Component: Key logical components and their relationships
* Code: Optional - UML. Only useful on massive complex code bases

They are a set of maps that allow you to zoom in.

Shneiderman’s mantra: Overview first (context & container), zoom and filter (component), then details-on-demand (code)

First two are hand drawn, last two should be automated.

## Context Diagrams

Intent: what is it? Who is it for? How does it fit in with the existing env?
Structure: People (roles, personas), your box, key dependenices - for non-technical people
Elements: People (name/user/persona & description/role/responsibilities) & Software Systems (name & short description of it's responsibilities. External/Internal system). External systems are ones which you don't own or run.
Interactions: Every interaction needs annotated - otherwise ambigious lines
Advantages: Explicit scope (no assumptions), how it fits in the your env, non-technical, shows who to talk to for intra-service comms.
Audience: Tech and Non-Tech
When: Requirements phase, always required

## Container Diagrams

Intent: What are the high level tech choices? How are resposbilities distributed? How does communication work? Where do I add features as a dev?
Structure: Containers (Web Application, Relational DB, Filesystem)
Elements: People (same as before), Software Systems, Containers (name, tech, description(responsibilties/entities for db))
Interactions: Purpose (writes, reads, sends), Mechanism (REST, SOAP, protobuf), Style (sync,async,batch), Protocols/PortNo (http, smtp)
Advantages: High level tech choices are explicit, relationships and communication styles are shown
Audience: Dev, Ops, Support staff
When: Always required

Some things dropped for brevitiy - logging to disk, dbs storing things on disk
If static app, no point mentioning brwoser, otherwise worth mentioning

## Component Diagrams

Intent: High level how the container works
Elements: Components (Name, tech (mongo4j, spring mvc), description)
When: Not a microservice or db

## Class Diagrams

Just don't

-----

# Making good diagrams

## Notation

* Titles: Add a title, diagram type or number to read them in
* Keys & Legends: Must have key explaining: shapes, line styles, colours, borders, acroymns
* Elements: 
  * Person: Name and description.
  * Software system: Name and description.
  * Container: Name, technology and description.
  * Component: Name, technology and description.
* Colour: Use to diffrentiate: Old vs New, Off shelf vs Custom, tech type, risk profile, size/complexity, ownership, internal/external, how soon/often they change (must be in key, must print in black and white)
* Shapes: Makes it more attractive
* Borders: double,dashed,coloured lines is great for grouping or emphasising. Must be labelled
* Size: Folk make assumptions, draw them the same size

Note: Names can be ambigious. Add a description of a short sentance or short list. Use a small font for this
Note: UML has too many diagram types and nuances to the notation

## Lines

* Directionality: Most significant direction, initiator to receiver, text description helps with this
* Description: end with a preposition (ends with: from, to, on, in). Read it aloud including the from and to boxes.
* Line Style: Sync solid, Aysnc dotted, https(green) http(amber): Use the legend
* One line vs Many: Can use multiple if it helps
  
# Diagrams must reflect reality

## Model Code Gap

* Languages don't use the same language as diagrams. 
* Use @Component to mark significant things. Naming conventions. package conventions.

## Including tech choices

* Need to be grounded in reality
* You are thinking about tech choices when you draw the boxes
* Answers questions like: how do these things communicate? What does it need to communicate? Why tech X?
* Makes sure folk who understand tech are drawing the diagrams
* When not sure ask: Is this how you will code it?

## Other diagrams

* “4+1” View Model (Philippe Kruchten)
 * Logical view, Process view, Phsyical view, Development, Scenarios
* Logical views don't work for developers and allow confusion to reign. Creating a process hand-off
* Wireframes are great
* Biz process / workflow: Great with flow chart or UML activity diagrams
* Domain: Entity diagrams. Swagger?
* Dyanmic Diagram: Kinda like sequence but C4y. Good for auth diagrams, async workflows (not evident from the code alone)
* Infra: Using AWS stencil etc
* Deployment: Containers to Nodes.
  * Physical (device), Virtualised (PAAS), Containerised (Docker), Environment (IIS, db server)
  * Use colour for primary, secondary

# Writing Documentation

Some extra docs is easier than exploring. Especially if you are leaving, or people are joining the team on a regular basis.

Docs should be a guidebook on how to get started and accelerate the exploration process.

## Guidebook

1. Context
2. Functional Overview
3. Quality Attributes
4. Constraints
5. Principles

6. Software Architecture
7. Code
8. Data

9.  Infrastructure Architecture
10. Deployment
11. Operation and Support
12. Development Environment
13. Decision Log

Product, not project level. Much smaller change for when things change. Little and often update.

## Context

* System Context diagram

## Functional Overview

* Key/significant functions.
* Workflows
* Can just refer to existing docs
* It's an overview, not super detailed

## Quality Attributes

* What are they? Are they SMART? Realistic?

## Constraints

* List the ones that have an impact, like limitations

## Principles

* DRY, SOLID etc

## Software Architecture

* Container Diagram

## Infra

* Physcial arch, who supports things, shared services

# Tooling

Drawing tools are silly, we need modelling tools.

https://stenciltown.omnigroup.com/stencils/c4/

https://arc42.org/overview/

CodeScene?