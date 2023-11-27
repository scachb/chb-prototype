//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')

const payeRouter = govukPrototypeKit.requests.setupRouter();

// Register your PAYE journey routes here


// Export the service router to be used by the SCA main router
module.exports = payeRouter;