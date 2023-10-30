import { setupHMRCPegaApp, HMRCRoute, CHBDemoPage } from "./kit";

setupHMRCPegaApp({
  routes: <>
    <HMRCRoute path="/" element={<CHBDemoPage />} />
  </>
})