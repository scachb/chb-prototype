//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


const govukPrototypeKit = require('govuk-prototype-kit')
const smsRouter = govukPrototypeKit.requests.setupRouter();

// Add your routes here
// Conditional routing for receiving a text message
  smsRouter.post('/confirm-text-answer', function(request, response) {

    var receiveSMS = request.session.data['child-benefit']['sms']['receive-text']
    if (receiveSMS == "Yes"){
        response.redirect("./confirm-a-phone-number")
    } else {
        response.redirect("./question-page")
    }
})

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
// smsRouter.post('/email-address-page', function (req, res) {

//     notify.sendEmail(
//       // this long string is the template ID, copy it from the template
//       // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
//       // in your code.
//       'eb4dabb6-5685-4526-9a4d-c856ae108762',
//       // `emailAddress` here needs to match the name of the form field in
//       // your HTML page
//       req.body.emailAddress
//     );
  
//     // This is the URL the users will be redirected to once the email
//     // has been sent
//     res.redirect('/confirmation-page');
  
//   });


// Export the journey router to be used by the service
module.exports = smsRouter;