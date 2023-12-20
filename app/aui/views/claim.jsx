import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  FieldValueList,
  Flex,
  Grid,
  Icon,
  NarrowWidePage,
  Text,
  useTheme,
} from "@pega/cosmos-react-core";
import { AuiLayout, SummaryPanel } from "../kit";
import { useState } from "react";

function ClaimSummaryPanel() {
  return (
    <SummaryPanel
      tabs={{
        type: "vertical",
        currentTabId: "claimant-details",
        tabs: [
          {
            id: "claimant-details",
            name: "Claimant details",
            href: "/",
          },
          {
            id: "relationship-details",
            name: "Relationship details",
            href: "/",
          },
          {
            id: "child-details",
            name: "Child details",
            href: "/",
          },
          {
            id: "income-details",
            name: "Income details",
            href: "/",
          },
          {
            id: "full-details",
            name: "Full details",
            href: "/",
          },
          {
            id: "pulse",
            name: "Pulse",
            href: "/",
          },
        ],
      }}
    />
  );
}

function ClaimView() {
  const [utiltiesOpen, setUtilitiesOpen] = useState(false);

  return (
    <Grid container={{ cols: "1fr auto", gap: 2 }}>
      <Grid container={{ gap: 2 }}>
        <Card style={{ backgroundColor: "white" }}>
          <CardContent container={{ pad: 0 }}>
            <Flex container={{ justify: "evenly" }}>
              <Flex container={{ gap: 1 }}>
                <Icon color="green" name="check" />
                <Text>Create</Text>
              </Flex>
              <Flex container={{ gap: 1 }}>
                <Icon color="green" name="check" />
                <Text>Apply</Text>
              </Flex>
              <Flex
                // TODO: Right arrow styling
                // style={{ borderRight: "1px solid grey", paddingInline: 20 }}
                container={{ gap: 1 }}
              >
                <Icon color="green" name="check" />
                <Text>Document Verification</Text>
              </Flex>
              <Flex container={{ gap: 1 }}>
                {/* <Icon name="case-solid" /> */}
                <Text>
                  <strong>Manual Investigation</strong>
                </Text>
              </Flex>
              <Flex container={{ gap: 1 }}>
                {/* <Icon name="case-solid" /> */}
                <Text>Verification</Text>
              </Flex>
              <Flex container={{ gap: 1 }}>
                {/* <Icon name="case-solid" /> */}
                <Text>Submission</Text>
              </Flex>
              <Flex container={{ gap: 1 }}>
                {/* <Icon name="case-solid" /> */}
                <Text>Resolution</Text>
              </Flex>
            </Flex>
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: "white" }}>
          <CardHeader>Tasks</CardHeader>
          <CardContent>Task 1</CardContent>
        </Card>

        <Card style={{ backgroundColor: "white" }}>
          <CardContent>
            <Grid container={{ gap: 2 }}>
              <FieldValueList
                fields={[
                  {
                    name: "National Insurance number",
                    value: "RE067085A",
                  },
                  {
                    name: "Date of birth",
                    value: "20 November 1971",
                  },
                ]}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Flex container={{ direction: "column", gap: 2 }}>
        <Button
          variant="simple"
          title="Expand utilities panel"
          icon
          onClick={() => setUtilitiesOpen(true)}
        >
          <Icon name="plus" />
        </Button>
        <Card style={{ backgroundColor: "white" }}>
          <CardContent container={{ pad: 1 }}>awd</CardContent>
        </Card>
      </Flex>

      <Drawer
        open={utiltiesOpen}
        onOuterClick={() => setUtilitiesOpen(false)}
        position="fixed"
        size="30rem"
        placement="right"
        transitionSpeed="0.25s"
        shadow
      >
        <Flex
          style={{
            height: "100%",
            backgroundColor: "white",
            paddingTop: 60,
          }}
          container={{ direction: "column", pad: 2 }}
        >
          <Text variant="h2">I am the utilties panel</Text>
        </Flex>
      </Drawer>
    </Grid>
  );
}

export default function ClaimPage() {
  return (
    <AuiLayout>
      {/* <TabbedPage
        tabs={{
          defaultTabId: "ch1",
          tabs: [
            {
              id: "ch1",
              name: "Child Benefit claim",
              content: ( */}
      <NarrowWidePage a={<ClaimSummaryPanel />} b={<ClaimView />} />
      {/* ),
            },
            {
              id: "ch2",
              name: "Child Benefit claim",
              content: <p>Hello</p>,
            },
          ],
        }}
      /> */}
      <Grid style={{ backgroundColor: "white" }} container={{ pad: 2 }}>
        <div className="govuk-tabs" data-module="govuk-tabs">
          <h2 className="govuk-tabs__title">Contents</h2>
          <ul className="govuk-tabs__list">
            <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
              <a className="govuk-tabs__tab" href="#case-details">
                Case details
              </a>
            </li>
            <li className="govuk-tabs__list-item">
              <a className="govuk-tabs__tab" href="#audit">
                Audit
              </a>
            </li>
          </ul>

          <div className="govuk-tabs__panel" id="case-details">
            <Flex container={{ justify: "evenly", align: "start" }}>
              <dl>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Created</dt>
                  <dd>5 Dec 2023</dd>
                </Flex>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Created by</dt>
                  <dd>ODX Wrapper Agent</dd>
                </Flex>
              </dl>
              <dl>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Urgency</dt>
                  <dd>10</dd>
                </Flex>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Deadline</dt>
                  <dd>-------</dd>
                </Flex>
              </dl>
              <dl>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Last update</dt>
                  <dd>5 Dec 2023</dd>
                </Flex>
                <Flex container={{ direction: "row", gap: 5 }}>
                  <dt>Last updated</dt>
                  <dd>ODX Wrapper Agent</dd>
                </Flex>
              </dl>
            </Flex>
          </div>

          <div
            className="govuk-tabs__panel govuk-tabs__panel--hidden"
            id="audit"
          >
            <h2 className="govuk-heading-l">History</h2>
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
        </div>
      </Grid>
    </AuiLayout>
  );
}
