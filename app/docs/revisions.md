# How to document design revisions

In order to keep track of design artefacts, revisions and changes over time to journeys we encourage you to document your designs. For example, if a user story comes and it requires new designs, this would be a perfect opportunity to document your designs. 

The format of a design document looks like this:

```html
 <h3 class="govuk-heading-l">Name of design</h3>

  <p class="govuk-body govuk-!-font-weight-bold">Why is this needed?</p>

  <p>Summary of design.</p>

  {%- from "govuk/components/tag/macro.njk" import govukTag -%}
  <p>
    {{ govukTag({
      text: "New",
      classes: "govuk-tag--grey"
    }) }}
    <a href="#">Summary of revision</a>
  </p>

  <time class="govuk-body" datetime="">23 Novemember 2023</time>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" aria-hidden="true">
```

Because this is a lot of html to copy we also have a macro found under `common/macros/document-design.html` and can be used like this:

```html
  {% from "common/macros/document-design.html" import documentDesign %}

  {{ documentDesign({
    name: "End to end",
    includeSeparator: true,
    summary: "Updated with declaration for adoption and born outside the UK.",
    revisions: [
      {
        summary: "Journey",
        href: "./end-to-end/start",
        tag: {
          text: "New",
          classes: "govuk-tag--blue"
        }
      },
      {
        summary: "Tube map for claimant journey",
        href: "public/pdf/SCA-Child-Benefit-Journey.pdf",
        tag: {
          text: "Outdated",
          classes: "govuk-tag--grey"
        }
      },
      {
        summary: "Tube map SVG",
        href: "public/svg/SCA-Journey-02.svg",
        tag: {
          text: "Outdated",
          classes: "govuk-tag--grey"
        }
      }
    ]
  }) }}
```

The macro should help shorten the amount of html to remember and can be quite good to use if you have mulitple revisions of a design. You can use any class from the GOV.UK tag component to help give your revision some emphasis.

We also recommend you include a date of the day the design started or was completed.

The layout of the document was inspired by the work already done on Child Benefit by Alex James and the work done by the [people who made the x-gov document tool](https://x-govuk.github.io/govuk-design-history/get-started/).

Next read [How to use the Manage Prototype](./manage-your-prototype.md)