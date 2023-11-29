//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const smsRouter = govukPrototypeKit.requests.setupRouter();

// Add your routes here
// Conditional routing for receiving a text message
  smsRouter.post('/confirm-text-answer', function(request, response) {

    var receiveSMS = request.session.data['receive-text']
    if (receiveSMS == "Yes"){
        response.redirect("./confirm-a-phone-number")
    } else {
        response.redirect("./question-page")
    }
})


// Export the journey router to be used by the service
module.exports = smsRouter;