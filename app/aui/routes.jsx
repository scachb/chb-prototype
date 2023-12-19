
import ExamplePage from './views/example';
import { setupPrototypeRoutes, AppLayout, HomePage } from './kit';

setupPrototypeRoutes([
  {
    path: '/',
    element: (
      <HomePage 
        journeys={[
          {
            title: 'Example page',
            summary: 'An example page.',
            link: '/example'
          }
        ]}
      />
    )
  },
  {
    path: '/example',
    element: (
      <AppLayout>
        <ExamplePage />
      </AppLayout>
    )
  }
])