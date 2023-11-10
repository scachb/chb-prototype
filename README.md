# chb-prototype
 This is a prototype of a new service

## Documentation

## Layout
See [https://design-system.service.gov.uk/styles/page-template/] for more information on configuring 
the GOV.UK main layout

We currently have one main layout file in this repo and we'd like to keep it that way for Child Benefits unless unauthenticated comes along.

In the app/views/layouts/main.html you'll find the following macros (reusable html) that we've defined for Child Benefit prototypes.

  - layoutBackLink() - renders back link in the layout
    - No options
    - Must be called in the {% block beforeContent %}
  - layoutLanguageSelect() - imports and renders HMRC langauge select with Welsh by default in the layout
    - No options
    - Must be called in the {% block beforeContent %}
  - layoutPhaseBanner() - wrapper around the govuk phase banner which has the follow options
    - Options:
      - "text": used for text of the tag in the phase banner, if nothing is provided the macro will default to "BETA"
    - Must be called in the {% block beforeContent %}
  - layoutServiceLinks() - renders links to allow the user to report a page is not working
    - No options
    - Must be called at the end of {% block content %}
  - layoutSatisfiedWithServiceLink() - renders a link to allow the user to report on the service
    - No options
    - Must be called at the end of {% block content %}

## Macros

Found in app/views/layouts/macros.html

The current macros are defined in this file:

- locationAutocomplete - renders location autocomplete component with styles and javascript
  - Options:
    - id: provides the "id" attribute of the autocomplete, also links label to input for screen readers
    - name: provides the "name" attribute of the autocomplete
    - value: provides the "value" attribute of the autocomplete
    - label: 
      - text: provides the text of the label
      - isPageHeading: whether to wrap the label as the page heading, otherwise renders as regular label
    - hint:
      - text: provides the text of the hint instruction, otherwise doesn't show

