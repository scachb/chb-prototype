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
router.post('/one-thing-per-page/tell-us-your-other-name', function(request, response) {
  var knownName = request.session.data['known-name']

  if (knownName == "Yes"){
    response.redirect("/one-thing-per-page/tell-us-your-other-name")
  } else {
    response.redirect("/your-date-of-birth")
  }
})

// Conditional routing for other nationality
router.post("/where-have-you-lived", function (request, response) {
  if (request.session.data['nationality-another'] == "Yes") {
    // This is a workaround, nationality pages go back and forth to the same place and get stuck in a loop
    // Setting to lowercase yes prevents this IF check from looping through the journey
    request.session.data["nationality-another"] = "yes"
    
    response.redirect("/nationality/add-other-nationality")
  } else {
    response.redirect("/where-have-you-lived")
  }
})

// Conditional routing for address over 12 years page
router.post("/your-telephone-number", function (request, response) {
  if (request.session.data['address-over-year'] == "No") {
    response.redirect("/one-thing-per-page/tell-us-your-last-address")
  } else {
    response.redirect("/your-telephone-number")
  }
})