//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes

const govukPrototypeKit = require('govuk-prototype-kit');
const childBenefitRouter = require('./views/child-benefit/routes');
const payeRouter = require('./views/paye/routes');
const selfAssessmentRouter = require('./views/self-assessment/routes');

const scaRouter = govukPrototypeKit.requests.setupRouter()

// Register your SCA services here

// Registers all Child Benefit journeys to /child-benefit
scaRouter.use("/child-benefit", childBenefitRouter);

// Registers all PAYE journeys to /paye
scaRouter.use("/paye", payeRouter);

// Registers all Self Assessment journeys to /self-assessment
scaRouter.use("/self-assessment", selfAssessmentRouter);


