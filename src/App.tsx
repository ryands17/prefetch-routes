import * as React from 'react'
import { useRoutes, BrowserRouter, NavLink } from 'react-router-dom'
import { routeEntries, routes } from 'config/routes'

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

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to={routes.home.path}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.about.path}>About</NavLink>
        </li>
        <li>
          <NavLink to={routes.contact.path}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
