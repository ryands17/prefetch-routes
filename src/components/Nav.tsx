import * as React from 'react'
import { routes } from 'config/routes'
import { PrefetchLink } from './PrefetchLink'

export const Nav = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          width: '30%',
          justifyContent: 'space-between',
        }}
      >
        <li>
          <PrefetchLink to={routes.home.path}>Home</PrefetchLink>
        </li>
        <li>
          <PrefetchLink to={routes.about.path}>About</PrefetchLink>
        </li>
        <li>
          <PrefetchLink to={routes.contact.path}>Contact</PrefetchLink>
        </li>
      </ul>
    </nav>
  )
}
