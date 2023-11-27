//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const penaltiesAndAppealsRouter = require("./penalties-and-appeals/routes");

const selfAssessmentRouter = govukPrototypeKit.requests.setupRouter();

// Register your Self Assessment journey routes here

// Registers all routes to /self-assessment/penalties-and-appeals
selfAssessmentRouter.use("/penalties-and-appeals", penaltiesAndAppealsRouter);

// Export the service router to be used by the SCA main router
module.exports = selfAssessmentRouter;