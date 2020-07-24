import * as React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { routeEntries } from 'config/routes'
import { Nav } from 'components/Nav'

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <h1>Prefetch Routes</h1>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App

const Routes = () => {
  const renderRoutes = useRoutes(
    routeEntries.map(route => ({
      path: route.path,
      element: <route.element />,
    }))
  )
  return renderRoutes
}
