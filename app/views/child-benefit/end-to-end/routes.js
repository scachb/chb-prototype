//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')

const endToEndRouter = govukPrototypeKit.requests.setupRouter()

// Add your routes here

endToEndRouter.post('/change-child-answer', function(request, response) {
  if (request.session.data['child-benefit']['end-to-end']['change-child-details'] == "index"){
    response.redirect("./children-list")
  } else {
    response.redirect("./children-list")
  }
})

// Conditional routing for address over the other name
endToEndRouter.post(
  '/one-thing-per-page/tell-us-the-other-name', 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['known-name'] == "Yes"){
      response.redirect("./tell-us-the-other-name")
    } else {
      response.redirect("../your-date-of-birth")
    }
  }
)

// Conditional routing for other nationality
endToEndRouter.post(
  "/nationality/add-other-nationality", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['nationality-another'] == "Yes") {
      response.redirect("./add-other-nationality")
    } else {
      response.redirect("../where-have-you-lived")
    }
  }
)

// Conditional routing for address over 12 years page
endToEndRouter.post(
  "/one-thing-per-page/tell-us-your-last-address", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['address-over-year'] == "No") {
      response.redirect("./tell-us-your-last-address")
    } else {
      response.redirect("../your-telephone-number")
    }
  }
)

// Conditional routing for eldest child details
endToEndRouter.post(
  "/one-thing-per-page/eldest-child-details", 
  function(request, response) {
    const claiming = request.session.data['child-benefit']['end-to-end']['claiming-child-benefit-right-now'];

    if (claiming == "Yes" || claiming == "Yesandno") {
      response.redirect("./eldest-child-details")
    } else {
      response.redirect("./other-benefits")
    }
  }
)

// Conditional routing for partner eldest child details
endToEndRouter.post(
  "/one-thing-per-page/partner-eldest-child-details", 
  function(request, response) {
    const claiming = request.session.data['child-benefit']['end-to-end']['partner-claiming-child-benefit'];

    if (
      claiming == "claiming-child-benefit-and-getting-payments" || 
      claiming == "claiming-child-benefit-and-not-getting-payments" ||
      claiming == "waiting-to-hear-if-they-are-eligible-for-child-benefit"
    ) {
      response.redirect("./partner-eldest-child-details")
    } else {
      response.redirect("../relationship/partner-national-insurance")
    }
  }
)

// Conditional routing for other country
endToEndRouter.post(
  "/one-thing-per-page/other-country", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['confirm-country'] == "yes") {
      response.redirect("./other-country")
    } else {
      response.redirect("../claiming-child-benefit")
    }
  }
)

// Conditional routing for child's other name
endToEndRouter.post(
  "/one-thing-per-page/deed-poll", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['changed-name'] == "yes") {
      response.redirect("./deed-poll") 
    } else {
      response.redirect("./further-child-details")
    }
  }
)

// Conditional routing for child birth registered unique to each country in UK
endToEndRouter.post(
  "/one-thing-per-page/system-number", 
  function(request, response) {
    const registered = request.session.data['child-benefit']['end-to-end']['child-birth-registered'];

    if (registered == "england" || registered == "wales" ) {
      response.redirect("./system-number") 
    } else if (registered == "scotland") {
      response.redirect("./district-number")
    } else if (registered == "northern-ireland") {
      response.redirect("./registration-number")
    } else {
      response.redirect("../multiple-children/adopt")
    }
  }
)

// Conditional routing for system number input
endToEndRouter.post(
  "/one-thing-per-page/system-number-input", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['birth-certificate-have-system-number'] == "yes"
    ) {
      response.redirect("./system-number-input") 
    } else {
      response.redirect("../multiple-children/adopt")
    }
  }
)

// Conditional routing for district number input
endToEndRouter.post("/one-thing-per-page/district-number-input", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['birth-certificate-have-district-number'] == "yes"
    ) {
      response.redirect("./district-number-input") 
    } else {
      response.redirect("../multiple-children/adopt")
    }
  }
)

// Conditional routing for registration number input
endToEndRouter.post("/one-thing-per-page/registration-number-input", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['birth-certificate-have-registration-number'] == "yes"
    ) {
      response.redirect("./registration-number-input") 
    } else {
      response.redirect("../multiple-children/adopt")
    }
  }
)

// Conditional routing for previous claimant
endToEndRouter.post(
  "/one-thing-per-page/do-you-know-who-claimed", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['have-you-claimed-for-this-child'] == "yes"
    ) {
      response.redirect("./do-you-know-who-claimed") 
    } else {
      response.redirect("../multiple-children/child-address")
    }
  }
)

// Conditional routing for previous claimant - do you know who claimed
endToEndRouter.post(
  "/one-thing-per-page/name-of-person-who-claimed", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['know-who-claimed-for-this-child'] == "yes"
    ) {
      response.redirect("./name-of-person-who-claimed") 
    } else {
      response.redirect("../multiple-children/child-address")
    }
  }
)

// Conditional routing for finding address of claimant
endToEndRouter.post(
  "/one-thing-per-page/find-address-of-previous-claimant", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['do-you-know-the-address-of-the-previous-claimant'] == "yes"
    ) {
      response.redirect("./find-address-of-previous-claimant") 
    } else {
      response.redirect("../multiple-children/child-address")
    }
  }
)

// Conditional routing for child lives with you
endToEndRouter.post(
  "/multiple-children/child-different-address", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['child-live-with-you'] == "yes") {
      response.redirect("./child-different-address") 
    } else {
      response.redirect("./child-lives-with")
    }
  }
)

// Conditional routing for knowing the person child lives with
endToEndRouter.post(
  "/multiple-children/person-child-lives-with", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['know-who-the-child-lives-with'] == "yes") {
      response.redirect("./person-child-lives-with") 
    } else {
      response.redirect("./check-answers")
    }
  }
)

// Conditional routing for finding address of the person child lives with
endToEndRouter.post(
  "/multiple-children/find-address-of-person", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['know-address-of-person-child-lives-with'] == "yes"
    ) {
      response.redirect("./find-address-of-person") 
    } else {
      response.redirect("./check-answers")
    }
  }
)

// Conditional routing for if the child has lived at a different address
endToEndRouter.post(
  "/multiple-children/lived-with-another", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['child-different-address'] == "yes") {
      response.redirect("./lived-with-another") 
    } else {
      response.redirect("./check-answers")
    }
  }
)

// Conditional routing for if the child has lived at a different address
endToEndRouter.post(
  "/multiple-children/person-child-lived-with", 
  function(request, response) {
    if (request.session.data['child-benefit']['end-to-end']['child-lived-with'] == "yes") {
      response.redirect("./person-child-lived-with") 
    } else {
      response.redirect("./check-answers")
    }
  }
)

// Conditional routing for the person who the child lived with address
endToEndRouter.post(
  "/multiple-children/find-address-of-person-lived-with", 
  function(request, response) {
    if (
      request.session.data['child-benefit']['end-to-end']['know-address-of-person-child-lived-with'] == "yes"
    ) {
      response.redirect("./find-address-of-person-lived-with") 
    } else {
      response.redirect("./person-lived-with-telephone-number")
    }
  }
)

// Export the journey router to be used by the service
module.exports = endToEndRouter