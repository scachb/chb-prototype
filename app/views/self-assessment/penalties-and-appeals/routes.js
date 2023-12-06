//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')

const penaltiesAndAppealsRouter = govukPrototypeKit.requests.setupRouter();

// Add your routes here

penaltiesAndAppealsRouter.post(
    '/reason-answer', 
    function(request, response) {
      if (request.session.data['self-assessment']['penalties-and-appeals']['reasonLateFiling'] == "other-reason"){
        response.redirect("./other-filing")
      } else {
        response.redirect("./check-answers")
      }
    }
  )

// Export the journey router to be used by the service
module.exports = penaltiesAndAppealsRouter;