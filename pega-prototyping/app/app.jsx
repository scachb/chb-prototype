import { RadioButton, RadioButtonGroup, DashboardPage, AppShell } from '@pega/cosmos-react-core';

export default function App() {
  return (
    <AppShell
      appHeader
      appInfo={{
        imageSrc: "/HMRC-logo.png",
        appName: "ADVISER UI",
      }}
      operator={{
        name: "Prototype",
        actions: ["primary"]
      }}
      main={
        <DashboardPage
          a='a'
          b='b'
          c='c'
          filterPosition='block-start'
          fitToViewport
          title={'Dashboard' || 'Dashboard'}
        />
      }
    />
  )
};
