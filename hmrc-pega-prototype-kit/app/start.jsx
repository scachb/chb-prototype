import { Button } from "@pega/cosmos-react-core";
import { setupHMRCPegaApp, HMRCRoute, CHBDemoPage } from "./kit";

function GovukWarningText({
  text
}) {
  return <button>{text.toUpperCase()}</button>

}

setupHMRCPegaApp({
  routes: <>
    <HMRCRoute path="/" element={
      <div>
        <h1>Page heading</h1>
        <GovukWarningText text="Warning" />
        <GovukWarningText text="Success" />
        <Button loading="true">Pega button</Button>
      </div>
    } />
  </>
})