import ExamplePage from "./views/example";
import { setupPrototypeRoutes, AuiLayout, HomePage, SummaryPanel } from "./kit";
import { NarrowWidePage, TabbedPage } from "@pega/cosmos-react-core";
import ClaimPage from "./views/claim";

setupPrototypeRoutes([
  {
    path: "/",
    element: (
      <HomePage
        journeys={[
          {
            title: "Example page",
            summary: "An example page.",
            link: "/example",
          },
          {
            title: "Claim page",
            summary: "An example claim.",
            link: "/claim",
          },
        ]}
      />
    ),
  },
  {
    path: "/example",
    element: (
      <AuiLayout>
        <ExamplePage />
      </AuiLayout>
    ),
  },
  {
    path: "/claim",
    element: <ClaimPage />,
  },
]);
