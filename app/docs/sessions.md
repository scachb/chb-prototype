# Session data within this repo

Conventions for managing the global session for each service

Using the data['name-of-service']['name-of-journey/feature']['name-of-field']

In nunjucks macro:

```
  {{ govukInput({
    name: data[name-of-service][name-of-journey][name-of-input]
  }) }}
```

In HTML:

```html
  <input type="text" id="name-of-input" name="name-of-service[name-of-journey][name-of-input]">
```

## IMPORTANT

When you register a "name" attribute on a field to collect information in the session, start with name-of-service and then access the journey and then the name of the field: this is so the field gets registered in the session and is updated when you change it.

In views and routes.js you have to use "data." or "data[]" because it's help on the data key of the session, input fields don't need the "data" key prefix.

You can read more on this at: https://prototype-kit.service.gov.uk/docs/session
!!!!!

## Accessing values

In check your answers page

```javascript
  // If inside summary list
  value: {
    text: data['child-benefit']['end-to-end']['nino-data']
  },
```

In views

```javascript
  {{ data['name-of-service']['name-of-journey']['name-of-field'] }}
```

In routes.js

```javascript
  const value = request.session.data['name-of-service']['name-of-journey']['name-of-field']

  // If this is too long to type every time you can create a reusable function within the file
  // Example
  function exampleSession(request) {
    const session = request.session.data['name-of-service']['name-of-journey']
  }

  // Example usage
  endToEndRouter.post(
  '/one-thing-per-page/tell-us-the-other-name', 
  function(request, response) {
    const session = endToEndSession(request);
    
    if (session['known-name'] == "Yes"){
      response.redirect("./tell-us-the-other-name")
    } else {
      response.redirect("../your-date-of-birth")
    }
  }
)
```

> This is the end of the documentation, happy prototyping.