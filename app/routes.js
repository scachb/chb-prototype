//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const childBenefit = require('./views/child-benefit/end-to-end/routes');

const router = govukPrototypeKit.requests.setupRouter()

// Use Child Benefit service routes
router.use(childBenefit)