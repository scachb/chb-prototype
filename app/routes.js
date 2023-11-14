//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('change-child-answer', function(request, response) {
  var changeChild = request.session.data['change-child-details']
  
  if (changeChild == "index"){
    response.redirect("children-list")
  } else {
    response.redirect("children-list")
  }
})

// Conditional routing for address over the other name
router.post('/one-thing-per-page/tell-us-the-other-name', function(request, response) {
  var knownName = request.session.data['known-name']

  if (knownName == "Yes"){
    response.redirect("/one-thing-per-page/tell-us-the-other-name")
  } else {
    response.redirect("/your-date-of-birth")
  }
})

// Conditional routing for other nationality
router.post("/nationality/add-other-nationality", function (request, response) {
  if (request.session.data['nationality-another'] == "Yes") {
    response.redirect("/nationality/add-other-nationality")
  } else {
    response.redirect("/where-have-you-lived")
  }
})

// Conditional routing for address over 12 years page
router.post("/one-thing-per-page/tell-us-your-last-address", function (request, response) {
  if (request.session.data['address-over-year'] == "No") {
    response.redirect("/one-thing-per-page/tell-us-your-last-address")
  } else {
    response.redirect("/your-telephone-number")
  }
})

// Conditional routing for eldest child details
router.post("/one-thing-per-page/eldest-child-details", function (request, response) {
  const claiming = request.session.data['claiming-child-benefit-right-now'];

  if (claiming == "Yes" || claiming == "Yesandno") {
    response.redirect("/one-thing-per-page/eldest-child-details")
  } else {
    response.redirect("/marital-status")
  }
})

// Conditional routing for partner eldest child details
router.post("/one-thing-per-page/partner-eldest-child-details", function (request, response) {
  const claiming = request.session.data['partner-claiming-child-benefit'];

  if (
    claiming == "claiming-child-benefit-and-getting-payments" || 
    claiming == "claiming-child-benefit-and-not-getting-payments" ||
    claiming == "waiting-to-hear-if-they-are-eligible-for-child-benefit"
  ) {
    response.redirect("/one-thing-per-page/partner-eldest-child-details")
  } else {
    response.redirect("/partner/national-insurance")
  }
})