import { AppShell, Configuration } from "@pega/cosmos-react-core";

export default function Shell({ Page }) {
  return (
    <Configuration
      theme={{
        base: {
          palette: {
            interactive: "#036666",
          },
        },
        components: {
          "app-shell": {
            header: {
              "background-color": "#036666",
            },
          },
        },
      }}
    >
      <AppShell
        appHeader
        appInfo={{
          imageSrc: "/HMRC-logo.png",
          appName: "ADVISER UI",
        }}
        operator={{
          name: "Prototype",
          actions: ["primary"],
        }}
        main={Page}
      />
    </Configuration>
  );
}
