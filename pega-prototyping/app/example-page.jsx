import { DashboardPage } from "@pega/cosmos-react-core";
import AUIShell from "./aui-shell";

export default function App() {
  return (
    <AUIShell
      Page={
        <DashboardPage
          a="a"
          b="b"
          c="c"
          filterPosition="block-start"
          fitToViewport
          title={"Dashboard" || "Dashboard"}
        />
      }
    />
  );
}
