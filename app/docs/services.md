# How to create services and journeys

## What is a service

A service is an area of HMRC being developed with Pega under the SCA programme. A service will usually contain a number of journeys and features produced either by the P&UCD team or the designers within the Pega Delivery Team.

## What is a journey

A journey is a part of a service, for example, in Child Benefit they have both an end-to-end process for authenticated users using One GOV Login or an unauthenticated journey if they don't have One GOV Login. A journey can also a one-off feature, although these will most likely be included as part of the journey.

## How to create a new service

### 1. Locate the folder

Let's create an example service within the repo, to begin locate the `views` folder within the `app` folder, here you will find all of the services currently being worked on in SCA. 

### 2. Create the required files

Let's say we're going to create a new service for Benefits & Credits. We'll say this service falls under Universal Credits. We'll create a new folder called `universal-credit` and in here we'll create two new files: `index.html` and `routes.js`. 

- `index.html` is the main file that'll get displayed in the browser when the service is accessed at `/service`
- `routes.js` is the main routes configuration file for that service and will pass it's routes up to the main `routes.js` file in the parent folder

Once those two files are created, copy the html from within `common/templates/blank-service.html` under `app/views` and paste into the `index.html` you just created for the service. Now copy the content from `common/templates/blank-routes.js` file under `app/views` and paste into the `routes.js` file you created for the service.

### 3. Register the routes and links from homepage

Next locate the `index.html` and `routes.js` file in the parent folder under `app/views`. These are the main configuration files for the entire repo; we will now register the routes.

In `routes.js` copy an import line from the top of the file for example:

```js
const childBenefitRouter = require('./views/child-benefit/routes');
```

and paste below all the other imports and replace with the name of our new service in camelCase

```js
const universalCreditRouter = require('./views/universal-credit/routes');
```

This bit of code will find our `routes.js` file inside our new service and bring in the routes.

To register the routes to our main router copy any `router.use()` for example:

```js
// Registers all Child Benefit journeys to /child-benefit
scaRouter.use("/child-benefit", childBenefitRouter);
```

and paste below changing the names like what we did before:

```js
// Registers all Universal Credit journeys to /universal-credit
scaRouter.use("/universal-credit", universalCreditRouter);
```

This will pass the imported routes to our main SCA (Single Customer Account) router, and register them to be used.

### 4. Add the service url to the urls.html file

In order for the url navigation to work you need to put the service url before any journey or feature urls. To make this easier we have a `urls.html` in `app/views/common` that can be imported to any layout, or journey file (as long as it's .html) and can be used to construct a url.

Usually this is what has to be done:

```html
<!-- This can be done to but is longer -->
<form action="/universal-credit/feature/journey">
```

To make it easier and keep all links consistent we highly recommend you add your new service to the `urls.html`.

This ensures all urls used in the service share the same url beforehand, and if you ever wanted to change it in `urls.html`. All files that use it would get updated as well.

To add it to `urls.html`, copy and line in the file and paste it into a new area as such:

```html
{# PAYE services #}

{% set universal_credit = "/universal-credit" %}
```

Now you can use this variable anywhere you import it as described below.

For example if we have an `a` or `form` element that needs to link to another page in the journey we can do it with our urls file as such:

```html
{% import "common/urls.html" as urls %}

<form action="{{ urls.universal_credit }}/journey"></form>
```

## How to create journeys

Journeys are created in the same way as services like above. Except from some key differences:

- You will create folder for the journey under `universal-credit` for example, and then create its own `index.html` and `routes.js` file within that folder.
- Instead of copying from `blank-service.html` copy the contents from `blank-journey.html` as this will contain an example design revision to help you.
- Register the routes to the service `routes.js` file instead of the main repo's `routes.js` file. 
- When creating a url in `urls.html` instead of `{% set universal_credit = "/universal-credit" %}` use `{% set universal_credit_journey = "/universal-credit/journey" %}`.

Next read [How to document design revisions](./revisions.md)