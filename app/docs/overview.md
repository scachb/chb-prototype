
# SCA overview

The Single Customer Account (SCA) programme was launched with the vision to bring all of HMRC services under one customer account using Pega. The idea is to simplify the number of things a user needs to understand about the tax system and shift all the complexity over to HMRC's side.

## Current hierachy

- P&UCD (Product & User-Centered Design) team
- Product & Validation team
- Journey team 1 - Child Benefit
- Journey team 2 - Child Benefit new journeys
- Journey team 3 - Self Assessment

## Setup

All design artefacts, mockups etc. are stored within this repo and you'll find it all under the app/ folder.

This repo uses the [GOV.UK Prototype Kit v13](https://prototype-kit.service.gov.uk/docs/)

The repo is set up as follows:

```
- app
|- assets 
|- data
|  |- session-data-defaults.js 
|- docs 
|- views
|  |- service 1
|  |   |- index.html
|  |   |- routes.js
|  |- service 2
|  |   |- index.html
|  |   |- routes.js
|  |- index.html
|  |- routes.js

```

Next read [How to create and maintain services and journeys](app/docs/services.md)