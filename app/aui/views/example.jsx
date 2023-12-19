import { Flex, Text } from "@pega/cosmos-react-core";

export default function ExamplePage() {
  return (
    <>
      <Flex style={{ padding: '10px 20px' }}>
        <Text style={{ fontSize: '36px', fontWeight: 'bold' }} variant="h1">Welcome Alex James</Text>
      </Flex>

      <div style={{ backgroundColor: 'white', padding: '30px' }}>
        <button type="submit" class="govuk-button govuk-button--secondary" data-module="govuk-button">
          Get new work
        </button>

        <div class="govuk-tabs" data-module="govuk-tabs">
          <h2 class="govuk-tabs__title">
            Contents
          </h2>
          <ul class="govuk-tabs__list">
            <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
              <a class="govuk-tabs__tab" href="#past-day">
               My workbaskets
              </a>
            </li>
            <li class="govuk-tabs__list-item">
              <a class="govuk-tabs__tab" href="#past-week">
                My team's tasks
              </a>
            </li>
            <li class="govuk-tabs__list-item">
              <a class="govuk-tabs__tab" href="#past-month">
                Child Benefit
              </a>
            </li>
          </ul>
          <div class="govuk-tabs__panel" id="past-day">
            <h2 class="govuk-heading-l">Past day</h2>
            <table class="govuk-table">
              <thead class="govuk-table__head">
                <tr class="govuk-table__row">
                  <th scope="col" class="govuk-table__header">Case manager</th>
                  <th scope="col" class="govuk-table__header">Cases opened</th>
                  <th scope="col" class="govuk-table__header">Cases closed</th>
                </tr>
              </thead>
              <tbody class="govuk-table__body">
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">David Francis</td>
                  <td class="govuk-table__cell">3</td>
                  <td class="govuk-table__cell">0</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Paul Farmer</td>
                  <td class="govuk-table__cell">1</td>
                  <td class="govuk-table__cell">0</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Rita Patel</td>
                  <td class="govuk-table__cell">2</td>
                  <td class="govuk-table__cell">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
            <h2 class="govuk-heading-l">Past week</h2>
            <table class="govuk-table">
              <thead class="govuk-table__head">
                <tr class="govuk-table__row">
                  <th scope="col" class="govuk-table__header">Case manager</th>
                  <th scope="col" class="govuk-table__header">Cases opened</th>
                  <th scope="col" class="govuk-table__header">Cases closed</th>
                </tr>
              </thead>
              <tbody class="govuk-table__body">
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">David Francis</td>
                  <td class="govuk-table__cell">24</td>
                  <td class="govuk-table__cell">18</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Paul Farmer</td>
                  <td class="govuk-table__cell">16</td>
                  <td class="govuk-table__cell">20</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Rita Patel</td>
                  <td class="govuk-table__cell">24</td>
                  <td class="govuk-table__cell">27</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
            <h2 class="govuk-heading-l">Past month</h2>
            <table class="govuk-table">
              <thead class="govuk-table__head">
                <tr class="govuk-table__row">
                  <th scope="col" class="govuk-table__header">Case manager</th>
                  <th scope="col" class="govuk-table__header">Cases opened</th>
                  <th scope="col" class="govuk-table__header">Cases closed</th>
                </tr>
              </thead>
              <tbody class="govuk-table__body">
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">David Francis</td>
                  <td class="govuk-table__cell">98</td>
                  <td class="govuk-table__cell">95</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Paul Farmer</td>
                  <td class="govuk-table__cell">122</td>
                  <td class="govuk-table__cell">131</td>
                </tr>
                <tr class="govuk-table__row">
                  <td class="govuk-table__cell">Rita Patel</td>
                  <td class="govuk-table__cell">126</td>
                  <td class="govuk-table__cell">142</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}