const govukPrototypeKit = require("govuk-prototype-kit")

const router = govukPrototypeKit.requests.setupRouter();

// Change child answer
router.post('change-child-answer', function(request, response) {
  if (request.session.data['change-child-details'] == "index"){
    response.redirect("children-list")
  } else {
    response.redirect("children-list")
  }
})

// Conditional routing for address over the other name
router.post('/one-thing-per-page/tell-us-the-other-name', function(request, response) {
  if (request.session.data['known-name'] == "Yes"){
    response.redirect("/one-thing-per-page/tell-us-the-other-name")
  } else {
    response.redirect("/your-date-of-birth")
  }
})

// Conditional routing for other nationality
router.post("/nationality/add-other-nationality", function(request, response) {
  if (request.session.data['nationality-another'] == "Yes") {
    response.redirect("/nationality/add-other-nationality")
  } else {
    response.redirect("/where-have-you-lived")
  }
})

// Conditional routing for address over 12 years page
router.post("/one-thing-per-page/tell-us-your-last-address", function(request, response) {
  if (request.session.data['address-over-year'] == "No") {
    response.redirect("/one-thing-per-page/tell-us-your-last-address")
  } else {
    response.redirect("/your-telephone-number")
  }
})

// Conditional routing for eldest child details
router.post("/one-thing-per-page/eldest-child-details", function(request, response) {
  const claiming = request.session.data['claiming-child-benefit-right-now'];

  if (claiming == "Yes" || claiming == "Yesandno") {
    response.redirect("/one-thing-per-page/eldest-child-details")
  } else {
    response.redirect("/one-thing-per-page/other-benefits")
  }
})

// Conditional routing for partner eldest child details
router.post("/one-thing-per-page/partner-eldest-child-details", function(request, response) {
  const claiming = request.session.data['partner-claiming-child-benefit'];

  if (
    claiming == "claiming-child-benefit-and-getting-payments" || 
    claiming == "claiming-child-benefit-and-not-getting-payments" ||
    claiming == "waiting-to-hear-if-they-are-eligible-for-child-benefit"
  ) {
    response.redirect("/one-thing-per-page/partner-eldest-child-details")
  } else {
    response.redirect("/relationship/partner-national-insurance")
  }
})

// Conditional routing for other country
router.post("/one-thing-per-page/other-country", function(request, response) {
  if (request.session.data['confirm-country'] == "yes") {
    response.redirect("/one-thing-per-page/other-country")
  } else {
    response.redirect("/claiming-child-benefit")
  }
})

// Conditional routing for child's other name
router.post("/one-thing-per-page/deed-poll", function(request, response) {
  if (request.session.data['changed-name'] == "yes") {
    response.redirect("/one-thing-per-page/deed-poll") 
  } else {
    response.redirect("/one-thing-per-page/further-child-details")
  }
})

// Conditional routing for child birth registered unique to each country in UK
router.post("/one-thing-per-page/system-number", function(request, response) {
  const registered = request.session.data['child-birth-registered'];

  if (registered == "england" || registered == "wales" ) {
    response.redirect("/one-thing-per-page/system-number") 
  } else if (registered == "scotland") {
    response.redirect("/one-thing-per-page/district-number")
  } else if (registered == "northern-ireland") {
    response.redirect("/one-thing-per-page/registration-number")
  } else {
    response.redirect("/multiple-children/adopt")
  }
})

// Conditional routing for system number input
router.post("/one-thing-per-page/system-number-input", function(request, response) {
  if (request.session.data['birth-certificate-have-system-number'] == "yes") {
    response.redirect("/one-thing-per-page/system-number-input") 
  } else {
    response.redirect("/multiple-children/adopt")
  }
})

// Conditional routing for district number input
router.post("/one-thing-per-page/district-number-input", function(request, response) {
  if (request.session.data['birth-certificate-have-district-number'] == "yes") {
    response.redirect("/one-thing-per-page/district-number-input") 
  } else {
    response.redirect("/multiple-children/adopt")
  }
})

// Conditional routing for registration number input
router.post("/one-thing-per-page/registration-number-input", function(request, response) {
  if (request.session.data['birth-certificate-have-registration-number'] == "yes") {
    response.redirect("/one-thing-per-page/registration-number-input") 
  } else {
    response.redirect("/multiple-children/adopt")
  }
})

// Conditional routing for previous claimant
router.post("/one-thing-per-page/do-you-know-who-claimed", function(request, response) {
  if (request.session.data['have-you-claimed-for-this-child'] == "yes") {
    response.redirect("/one-thing-per-page/do-you-know-who-claimed") 
  } else {
    response.redirect("/multiple-children/child-address")
  }
})

// Conditional routing for previous claimant - do you know who claimed
router.post("/one-thing-per-page/name-of-person-who-claimed", function(request, response) {
  if (request.session.data['know-who-claimed-for-this-child'] == "yes") {
    response.redirect("/one-thing-per-page/name-of-person-who-claimed") 
  } else {
    response.redirect("/multiple-children/child-address")
  }
})

// Conditional routing for finding address of claimant
router.post("/one-thing-per-page/find-address-of-previous-claimant", function(request, response) {
  if (request.session.data['do-you-know-the-address-of-the-previous-claimant'] == "yes") {
    response.redirect("/one-thing-per-page/find-address-of-previous-claimant") 
  } else {
    response.redirect("/multiple-children/child-address")
  }
})

// Conditional routing for child lives with you
router.post("/multiple-children/child-different-address", function(request, response) {
  if (request.session.data['child-live-with-you'] == "yes") {
    response.redirect("/multiple-children/child-different-address") 
  } else {
    response.redirect("/multiple-children/child-lives-with")
  }
})

// Conditional routing for knowing the person child lives with
router.post("/multiple-children/person-child-lives-with", function(request, response) {
  if (request.session.data['know-who-the-child-lives-with'] == "yes") {
    response.redirect("/multiple-children/person-child-lives-with") 
  } else {
    response.redirect("/multiple-children/check-answers")
  }
})

// Conditional routing for finding address of the person child lives with
router.post("/multiple-children/find-address-of-person", function(request, response) {
  if (request.session.data['know-address-of-person-child-lives-with'] == "yes") {
    response.redirect("/multiple-children/find-address-of-person") 
  } else {
    response.redirect("/multiple-children/check-answers")
  }
})

// Conditional routing for if the child has lived at a different address
router.post("/multiple-children/lived-with-another", function(request, response) {
  if (request.session.data['child-different-address'] == "yes") {
    response.redirect("/multiple-children/lived-with-another") 
  } else {
    response.redirect("/multiple-children/check-answers")
  }
})

// Conditional routing for if the child has lived at a different address
router.post("/multiple-children/person-child-lived-with", function(request, response) {
  if (request.session.data['child-lived-with'] == "yes") {
    response.redirect("/multiple-children/person-child-lived-with") 
  } else {
    response.redirect("/multiple-children/check-answers")
  }
})

// Conditional routing for the person who the child lived with address
router.post("/multiple-children/find-address-of-person-lived-with", function(request, response) {
  if (request.session.data['know-address-of-person-child-lived-with'] == "yes") {
    response.redirect("/multiple-children/find-address-of-person-lived-with") 
  } else {
    response.redirect("/multiple-children/person-lived-with-telephone-number")
  }
})

module.exports = router