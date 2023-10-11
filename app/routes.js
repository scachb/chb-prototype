//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('change-child-answer', function(request, response) {

    var changeChild = request.session.data['change-child-details']
    
    if (changeChild == "index"){
        response.redirect("children-list")
    } else {
        response.redirect("children-list")
    }
   
})


router.post('/other-name', function(request, response) {

    var knownName = request.session.data['known-name']
    if (knownName == "Yes"){
        response.redirect("/other-name")
    } else {
        response.redirect("/your-date-of-birth")
    }
})