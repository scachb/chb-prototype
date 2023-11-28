//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const smsRouter = govukPrototypeKit.requests.setupRouter();

// Add your routes here
// Conditional routing for address over the other name
smsRouter.post('/sms/your-telephone-number', function(request, response) {
    var receiveSMS = request.session.data['receiveSMS']
    if (request.session.data['child-benefit']['sms']['receiveSMS'] == "Yes"){
        response.redirect("/child-benefit/sms/confirm-a-phone-number")
    } else {
        response.redirect("/child-benefit/sms/question-page")
    }  
  
  })

// Export the journey router to be used by the service
module.exports = smsRouter;