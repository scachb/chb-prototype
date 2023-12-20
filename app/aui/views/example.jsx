import { Flex, Tabs, Text } from "@pega/cosmos-react-core";

export default function ExamplePage() {
  return (
    <>
      <Flex style={{ padding: "10px 20px" }}>
        <Text style={{ fontSize: "36px", fontWeight: "bold" }} variant="h1">
          Welcome Alex James
        </Text>
      </Flex>

      <div style={{ backgroundColor: "white", padding: "30px" }}>
        <button
          type="submit"
          className="govuk-button govuk-button--secondary"
          data-module="govuk-button"
        >
          Get next work
        </button>

        <div className="govuk-tabs" data-module="govuk-tabs">
          <h2 className="govuk-tabs__title">Contents</h2>
          <ul className="govuk-tabs__list">
            <li className="govuk-tabs__list-item">
              <a className="govuk-tabs__tab" href="#my-workbaskets">
                My workbaskets
              </a>
            </li>
            <li className="govuk-tabs__list-item">
              <a className="govuk-tabs__tab" href="#my-teams-tasks">
                My team's tasks
              </a>
            </li>
            <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
              <a className="govuk-tabs__tab" href="#child-benefit">
                Child Benefit
              </a>
            </li>
          </ul>
          <div
            className="govuk-tabs__panel govuk-tabs__panel--hidden"
            id="my-workbaskets"
          >
            <h2 className="govuk-heading-l">Child Benefit</h2>
            <table className="govuk-table">
              <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                  <th scope="col" className="govuk-table__header">
                    Case manager
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases opened
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases closed
                  </th>
                </tr>
              </thead>
              <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">David Francis</td>
                  <td className="govuk-table__cell">98</td>
                  <td className="govuk-table__cell">95</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">Paul Farmer</td>
                  <td className="govuk-table__cell">122</td>
                  <td className="govuk-table__cell">131</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">Rita Patel</td>
                  <td className="govuk-table__cell">126</td>
                  <td className="govuk-table__cell">142</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="govuk-tabs__panel govuk-tabs__panel--hidden"
            id="my-teams-tasks"
          >
            <h2 className="govuk-heading-l">My team's tasks</h2>
            <table className="govuk-table">
              <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                  <th scope="col" className="govuk-table__header">
                    Case manager
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases opened
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases closed
                  </th>
                </tr>
              </thead>
              <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">David Francis</td>
                  <td className="govuk-table__cell">24</td>
                  <td className="govuk-table__cell">18</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">Paul Farmer</td>
                  <td className="govuk-table__cell">16</td>
                  <td className="govuk-table__cell">20</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">Rita Patel</td>
                  <td className="govuk-table__cell">24</td>
                  <td className="govuk-table__cell">27</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="govuk-tabs__panel" id="child-benefit">
            <Tabs
              currentTabId="my2"
              tabs={[
                { id: "my1", name: "My tasks" },
                { id: "my2", name: "My workbaskets" },
              ]}
            />

            <Flex style={{ marginBlock: 20 }}>
              <label for="workbaskets">View queue for: </label>
              <select class="govuk-select" id="workbaskets" name="workbaskets">
                <option value="published">Recently published</option>
                <option value="" selected>
                  Select queue...
                </option>
                <option value="chb-system-errors">ChB System Errors</option>
                <option value="chb-dvs-bf">DVS BF</option>
                <option value="chb-dvs-verification">DVS verification</option>
                <option value="chb-in-progress-claims">
                  In Progress ChB Claims
                </option>
                <option value="chb-manual-investigation">
                  Manual investigation
                </option>
                <option value="chb-manual-investigation-bf">
                  Manual investigation BF
                </option>
                <option value="chb-pending-entry">Pending ChB Entry</option>
              </select>
            </Flex>

            <h2 className="govuk-heading-m">
              Viewing queue for Manual investigation
            </h2>

            <h2 className="govuk-heading-m">My workbaskets table</h2>

            <table className="govuk-table">
              <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                  <th scope="col" className="govuk-table__header">
                    ID
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Case manager
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases opened
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Cases closed
                  </th>
                </tr>
              </thead>
              <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">
                    <a className="govuk-link" href="/claim">
                      C-108637
                    </a>
                  </td>
                  <td className="govuk-table__cell">David Francis</td>
                  <td className="govuk-table__cell">3</td>
                  <td className="govuk-table__cell">0</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell"></td>
                  <td className="govuk-table__cell">Paul Farmer</td>
                  <td className="govuk-table__cell">1</td>
                  <td className="govuk-table__cell">0</td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell"></td>
                  <td className="govuk-table__cell">Rita Patel</td>
                  <td className="govuk-table__cell">2</td>
                  <td className="govuk-table__cell">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
