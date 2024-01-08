//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes

const govukPrototypeKit = require('govuk-prototype-kit');

const auiRouter = govukPrototypeKit.requests.setupRouter();

// Register your Adviser UI journey routes here


// Export the journey router to be used by the service
module.exports = auiRouter;