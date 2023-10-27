import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import { Configuration } from "@pega/cosmos-react-core"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Configuration
      theme={{
        base: {
          palette: {
            interactive: "#036666"
          }
        },
        components: {
          "app-shell": {
            header: {
              "background-color": "#036666"
            }
          }
        }
      }}
    >
      <App />
    </Configuration>
  </React.StrictMode>,
)
