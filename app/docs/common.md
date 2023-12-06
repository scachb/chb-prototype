# How to use common components

All components and layouts commonly used by a service across journeys or just throughout one journey  should exist within the `common` folder found under `app/views`.

Under this folder you'll find a number of folders, each with their own purpose:

- layouts: common layouts for services and journeys.
- macros: common components of html we reuse across services.
- templates: blank templates to be used in creation of a new service or journey.
- urls.html: a file to define service/journey urls to link across pages.

If you find you're repeating html across services or journeys, think about defining them as a common macro or layout. All you have to do is create a new html file under `macros` for components or `layouts` for layouts and define it as such:

For macros:

```html
  {% macro example(options) %}
    <p>{{ example.text }}</p>
  {% endmacro %}
```

and use it in a journey/service file as such:

```html
  {% from "common/macros/example.html" import example %}

  {{ example({ 
    text: "Example macro"
  }) }}
```

For layouts:

```html
{#
  For guidance on how to use layouts see:
  https://prototype-kit.service.gov.uk/docs/how-to-use-layouts
#}

{% extends "govuk-prototype-kit/layouts/govuk-branded.njk" %}
{% import "common/urls.html" as urls %}

{#
  For guidance on blocks to customise see:
  https://design-system.service.gov.uk/styles/page-template/ 
#}
```

and use it in a service/journey file as such:

```html
{% extends "common/layouts/example.html" %}

{#
  For guidance on blocks to customise see:
  https://design-system.service.gov.uk/styles/page-template/ 

  Or define your own custom blocks in the layout.
#}
```

Next read [Session data within this repo](./sessions.md)