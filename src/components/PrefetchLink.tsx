import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { prefetchRoute } from 'config/utils'

type Props = React.ComponentProps<typeof NavLink>

export const PrefetchLink = ({ to, ...props }: Props) => {
  const onMouseEnterHandler = async () => {
    if (typeof to === 'string') {
      prefetchRoute(to)
    }
  }
  return <NavLink to={to} {...props} onMouseEnter={onMouseEnterHandler} />
}
