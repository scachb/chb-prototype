import ExamplePage from "./views/example";
import { setupPrototypeRoutes, AppLayout, HomePage, CaseLayout } from "./kit";

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
      <AppLayout>
        <ExamplePage />
      </AppLayout>
    ),
  },
  {
    path: "/claim",
    element: (
      <AppLayout>
        <CaseLayout>Content</CaseLayout>
      </AppLayout>
    ),
  },
]);
