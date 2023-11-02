# chb-prototype
 This is a prototype of a new service

## Temporary documentation

See [https://design-system.service.gov.uk/styles/page-template/] for more information on configuring 
the GOV.UK main layout

- Main Layout contains the following wrapper macros to call in each prototype page
  - layoutBackLink - renders back link in the layout
    - - Must be called in the {% block beforeContent %}
  - layoutLanguageSelect - imports and renders HMRC langauge select with Welsh by default in the layout
    - Must be called in the {% block beforeContent %}
  - layoutPhaseBanner - wrapper around the govuk phase banner which has the follow options:
    - { text: "" } if nothing is provided when calling the macro is defaults to "BETA"
    - Must be called in the {% block beforeContent %}
  - layoutPageNotWorkingLink - renders a link to allow the user to report a page is not working
    - Must be called at the end of {% block content %}
  - layoutSatisfiedWithServiceLink - renders a link to allow the user to report on the service
    - Must be called at the end of {% block content %}
