//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const complexQuestionRouter = govukPrototypeKit.requests.setupRouter();


// Add your routes here
complexQuestionRouter.post('/confirm-lived-answer', function(request, response) {

  var livedUKAbroad = request.session.data['child-benefit']['end-to-end']['complex-question']['details-lived-address-data']
  var LivedUK = request.session.data['child-benefit']['end-to-end']['complex-question']['details-lived-address-data']
  var NeverLivedUK = request.session.data['child-benefit']['end-to-end']['complex-question']['details-lived-address-data']
  
  
  if (livedUKAbroad == "livedUKAbroad"){
      response.redirect("./lived-uk-abroad")
  } else if (LivedUK == "LivedUK") {
    response.redirect("./current-uk-address")
  }
  else if (NeverLivedUK == "NeverLivedUK") {
    response.redirect("./country-normally-live")
  }


})



// Export the journey router to be used by the service
module.exports = complexQuestionRouter