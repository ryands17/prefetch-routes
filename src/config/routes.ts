import * as React from 'react'

export const routes = {
  home: {
    path: '/',
    element: React.lazy(() => import('pages/home')),
  },
  about: {
    path: '/about',
    element: React.lazy(() => import('pages/about')),
  },
  contact: {
    path: '/contact',
    element: React.lazy(() => import('pages/contact')),
  },
}

export const routeEntries = Object.values(routes)
