import { AppShell, Avatar, Configuration, Flex, Icon } from '@pega/cosmos-react-core';
import { createRoot } from 'react-dom/client';
import logo from '../assets/svg/hmrc-logo.svg';
import '../assets/css/py-icons.css'

// TODO: When we update to govuk-frontend 5.0.0 we can reference these from node_modules instead
import '../assets/css/govuk-frontend.min.css';
import { initAll } from '../assets/javascripts/govuk-frontend.min.js'

export function setupAUIPrototype(Page) {
  const root = createRoot(document.getElementById('app'));
  
  initAll()
  root.render(<App />);

  const theme = {
    components: {
      "app-shell": {
        header: {
          "background-color": '#007C7B'
        },
        nav: {
          "background-color": '#E8EAED'
        }
      }
    }
  }

  function App() {
    return ( 
      <Configuration theme={theme}>
        <AppShell 
          appHeader
          defaultExpanded
          appInfo={{
            imageSrc: logo,
            appName: 'ADVISER UI',
          }}
          searchInput={{}}
          cases={[]}
          links={
            [
              {
                name: 'My work',
                icon: 'case',
              },
              {
                name: 'Dashboard',
                icon: 'case'
              },
              {
                name: 'My reports',
                icon: 'case'
              },
              {
                name: "Admin tools",
                icon: 'phone',
                links: [
                  { name: 'Shuttering', icon: '' }
                ]
              },
              {
                name: 'Presense',
                icon: 'case'
              },
            ]
          }
          utils={
            [
              {
                name: 'Accessbility statement',
                visual: 
                  <Flex style={{ padding: '0 23px'}}>
                    <Icon name='case-solid' />
                  </Flex>
              }
            ]
          }
          caseTypes={[]}
          main={Page}
          operator={
            {
              name: 'awd', 
              actions: [], 
              avatar: <Avatar backgroundColor='white' icon='case-solid' />
            }
          }
        />
      </Configuration>
    )
  }
}