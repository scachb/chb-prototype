//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const endToEndRouter = require('./end-to-end/routes');
const portalRouter = require('./portal/routes');
const proofOfEntitlementRouter = require('./proof-of-entitlement/routes');
const unauthRouter = require('./unauth/routes');
const smsRouter = require('./sms/routes');

const childBenefitRouter = govukPrototypeKit.requests.setupRouter();

// Register your Child Benefit journey routes here

// Registers all routes to /child-benefit/end-to-end
childBenefitRouter.use('/end-to-end', endToEndRouter);

// Registers all routes to /child-benefit/portal
childBenefitRouter.use('/portal', portalRouter);

// Registers all routes to /child-benefit/proof-of-entitlement
childBenefitRouter.use('/proof-of-entitlement', proofOfEntitlementRouter);

// Registers all routes to /child-benefit/unauth
childBenefitRouter.use('/unauth', unauthRouter);

// Registers all routes to /child-benefit/unauth
childBenefitRouter.use('/sms', smsRouter);

// Export the journey router to be used by the service
module.exports = childBenefitRouter;