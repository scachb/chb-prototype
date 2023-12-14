//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')

const auiRouter = govukPrototypeKit.requests.setupRouter();

// Register your AUI journey routes here


// Export the service router to be used by the SCA main router
module.exports = auiRouter;