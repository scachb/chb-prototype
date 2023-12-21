// THIS FILE IS NOT TO BE TOUCHED UNLESS, SEE ROUTES.JSX FOR SETTING UP PROTOTYPES

import {
  Avatar,
  Button,
  Configuration,
  FieldValueList,
  Flex,
  Grid,
  Icon,
  MenuButton,
  NarrowWidePage,
  SearchInput,
  Status,
  TabPanel,
  Tabs,
  Text,
} from "@pega/cosmos-react-core";
import { createRoot } from "react-dom/client";
import logo from "../assets/svg/hmrc-logo.svg";
import "../assets/css/py-icons.css";

// TODO: When we update to govuk-frontend 5.0.0 we can reference these from node_modules instead
import "../assets/css/govuk-frontend.min.css";
import { initAll } from "../assets/javascripts/govuk-frontend.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/**
 *
 * @param {import('react-router-dom').RouteObject[]} routes
 */
export function setupPrototypeRoutes(routes) {
  const root = createRoot(document.getElementById("app"));

  initAll();

  const router = createBrowserRouter(routes);

  root.render(<RouterProvider router={router} />);
}

/**
 * @typedef Journey
 * @property {string} title
 * @property {string} summary
 * @property {string} link
 */

/**
 * @typedef HomePage
 * @property {Journey[]} journeys
 */

/**
 * GOV.UK page to log all of your design journeys and services
 * @param {HomePage} param0
 */
export function HomePage({ journeys }) {
  return (
    <>
      <a
        href="#main-content"
        className="govuk-skip-link"
        data-module="govuk-skip-link"
      >
        Skip to main content
      </a>
      <header
        className="govuk-header "
        role="banner"
        data-module="govuk-header"
      >
        <div className="govuk-header__container govuk-width-container ">
          <div className="govuk-header__logo">
            <a
              href="/"
              className="govuk-header__link govuk-header__link--homepage"
            >
              <span className="govuk-header__logotype">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="govuk-header__logotype-crown"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 97"
                  height="30"
                  width="36"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6H55.5s6.4 7.2 7.9 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                  ></path>
                </svg>
                <span className="govuk-header__logotype-text">GOV.UK</span>
              </span>
            </a>
          </div>
          <div className="govuk-header__content">
            <a
              href="#"
              className="govuk-header__link govuk-header__service-name"
            >
              HMRC Adviser UI
            </a>
          </div>
        </div>
      </header>

      <div className="govuk-width-container">
        <main className="govuk-main-wrapper" id="main-content" role="main">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-l govuk-!-margin-top-6">
                Adviser UI
              </h1>

              <p className="govuk-body">
                All journeys for the Adviser UI side of things. Must run `npm
                run aui`.
              </p>

              <h3 className="govuk-heading-m">Journeys</h3>
            </div>

            {journeys.map((journey, index) => (
              <section
                key={index}
                className="govuk-grid-column-one-half govuk-!-margin-bottom-6"
              >
                <h3 className="govuk-heading-m govuk-!-margin-bottom-1">
                  <a className="govuk-link" href={journey.link}>
                    {journey.title}
                  </a>
                </h3>
                <p className="govuk-body">{journey.summary}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const theme = {
  base: {
    palette: {
      interactive: "#007C7B",
    },
  },
  components: {
    "app-shell": {
      header: {
        "background-color": "#007C7B",
      },
      nav: {
        "background-color": "#E8EAED",
      },
    },
  },
};

function AuiHeader() {
  return (
    <Flex
      as="header"
      style={{ backgroundColor: "#007C7B" }}
      container={{ justify: "between", alignItems: "center", pad: 1 }}
    >
      <Flex
        style={{ color: "white" }}
        container={{ gap: 2, alignItems: "center" }}
      >
        <a href="/" title="HM Revenue and Customs - Home">
          <img
            width={100}
            src={logo}
            aria-hidden="true"
            alt="HM Revenue and Customs - Home"
          />
        </a>
        <Text>
          <strong>ADVISER UI</strong>
        </Text>
        <MenuButton
          style={{ color: "white" }}
          variant="text"
          icon="plus"
          text="New"
          menu={{
            items: [
              { id: "phone-call", primary: "Phone call", href: "" },
              { id: "messgae", primary: "Message", href: "" },
              {
                id: "outbound-phone-call",
                primary: "Outbound phone call",
                href: "",
              },
              { id: "web-chat", primary: "Web chat", href: "" },
            ],
          }}
        />
      </Flex>
      <Flex>
        <form role="search">
          <SearchInput searchInputAriaLabel="global" />
        </form>
      </Flex>
      <Flex style={{ color: "black" }} container={{ alignItems: "center" }}>
        <Button
          style={{ backgroundColor: "white" }}
          icon
          title="Click or enter key to open phone control, your status is Logged off"
          aria-haspopup="true"
        >
          <i
            style={{ fontSize: 16, marginLeft: 2 }}
            className="pi pi-phone-solid"
          ></i>
        </Button>
        <Button
          style={{ backgroundColor: "white" }}
          icon
          title="Start my day"
          aria-haspopup="true"
        >
          <i
            style={{ fontSize: 16, marginLeft: 2 }}
            className="pi pi-robot"
          ></i>
        </Button>
        <Button
          style={{
            backgroundColor: "white",
          }}
          icon
          title="Profile"
          aria-haspop="true"
        >
          <i
            style={{ fontSize: 16, marginLeft: 2 }}
            className="pi pi-user-solid"
          ></i>
        </Button>
      </Flex>
    </Flex>
  );
}

/**
 * @typedef AuiLayout
 * @property {import('react').ReactNode} children
 * @property {boolean} tabs
 */

/**
 * Adviser UI layout which comes with the header and expandable sidebar
 * @param {AuiLayout} param0
 */
export function AuiLayout({ children, tabs }) {
  return (
    <Configuration theme={theme}>
      {/* <AppShell
        appHeader
        defaultExpanded={sidebarExpanded ?? false}
        appInfo={{
          imageSrc: logo,
          appName: "ADVISER UI",
        }}
        cases={[]}
        links={[
          {
            name: "My work",
            icon: "case",
          },
          {
            name: "Dashboard",
            icon: "case",
          },
          {
            name: "My reports",
            icon: "case",
          },
          {
            name: "Admin tools",
            icon: "phone",
            links: [{ name: "Shuttering", icon: "" }],
          },
          {
            name: "Presense",
            icon: "case",
          },
          {
            name: "Accessibility statement",
            icon: "case",
          },
        ]}
        caseTypes={[]}
        main={children}
        operator={{
          name: "awd",
          actions: [],
          avatar: <Avatar backgroundColor="white" icon="phone-solid" />,
        }}
      /> */}
      <AuiHeader />
      <style>{`
        .custom-tab button span {
          color: white !important
        }
        .custom-tab button::after {
          background: white !important
        }
      `}</style>
      <Tabs
        className="custom-tab"
        style={{ backgroundColor: "#3E5160" }}
        currentTabId="home"
        tabs={[
          {
            id: "home",
            name: "Home",
            href: "",
          },
          {
            id: "child-benefit-claim",
            name: "Child Benefit claim",
            href: "",
          },
        ]}
      />
      <TabPanel currentTabId="home">
        <Grid container={{ cols: "0.2fr 1fr" }}>
          <Grid
            style={{
              height: "calc(100vh - 81px)",
              backgroundColor: "rgb(242, 243, 244)",
              borderRight: "1px solid black",
            }}
          >
            awd
          </Grid>
          <main style={{ backgroundColor: "rgb(242, 244, 245)" }}>
            {children}
          </main>
        </Grid>
      </TabPanel>
    </Configuration>
  );
}

/**
 * @typedef AuiPageHeader
 * @property {import('react').ReactNode} children
 * @property {string} heading
 */

/**
 * Page header component for a page in Adviser UI
 * @param {AuiPageHeader} param0
 * @returns
 */
export function AuiPageHeader({ children, heading }) {
  return (
    <Flex style={{ padding: "10px 20px" }}>
      <Text style={{ fontSize: "36px", fontWeight: "bold" }} variant="h1">
        {heading}
      </Text>
      {children}
    </Flex>
  );
}

/**
 * @typedef SummaryPanel
 * @property {import('@pega/cosmos-react-core').TabsProps} tabs
 * @property {}
 */

/**
 * Summary panel component for a Constellation case type
 * @param {SummaryPanel} param0
 */
export function SummaryPanel({ tabs }) {
  return (
    <Flex
      style={{
        backgroundColor: "white",
        minHeight: "calc(100vh - 48px)",
      }}
      container={{
        direction: "column",
      }}
    >
      <Flex
        style={{ backgroundColor: "#007C7B", color: "white" }}
        container={{ pad: 2, wrap: true }}
      >
        <Flex style={{ flex: 1 }} container={{ gap: 2, wrap: true }}>
          <Avatar
            shape="squircle"
            icon="case-solid"
            backgroundColor="#1F7971"
            aria-hidden="true"
          />
          <Flex container={{ direction: "column" }}>
            <Text variant="primary">
              <strong>Claim</strong>
            </Text>
            <Text>C-10856</Text>
          </Flex>
        </Flex>

        <MenuButton
          iconOnly
          icon="more"
          variant="simple"
          menu={{
            mode: "action",
            items: [
              {
                primary: "Edit",
              },
              {
                primary: "Another action",
              },
            ],
          }}
        />
      </Flex>

      <Flex container={{ pad: 2, gap: 2 }}>
        <FieldValueList
          variant="inline"
          fields={[
            {
              variant: "stacked",
              name: "Claim started",
              value: (
                <Text>
                  <strong>19 Dec 2023</strong>
                </Text>
              ),
            },
            {
              variant: "stacked",
              name: "Claim received",
              value: (
                <Text>
                  <strong>19 Dec 2023</strong>
                </Text>
              ),
            },
          ]}
        />
      </Flex>

      <Flex container={{ pad: 2, direction: "column" }}>
        <FieldValueList
          fields={[
            {
              name: "Updated",
              value: (
                <Text>
                  <a href="">Robin Upton</a> 1 hour ago
                </Text>
              ),
            },
            {
              name: "Urgency",
              value: <Text>10</Text>,
            },
            {
              name: "Status",
              value: (
                <Status variant="pending">Pending-ManualInvestigation</Status>
              ),
            },
          ]}
        />
      </Flex>

      <Tabs {...tabs} />
    </Flex>
  );
}
