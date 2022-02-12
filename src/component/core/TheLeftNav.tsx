import { mdiHome } from '@mdi/js'
import React from 'react'
import { THE_LEFT_NAV_TILES } from '../../constants'
import NavTile from '../commons/NavTile'

const TheLeftNav: React.FC = () => {
  const TILES = [
    { title: THE_LEFT_NAV_TILES.HOME, path: mdiHome },
    { title: THE_LEFT_NAV_TILES.NEW_IN, path: mdiHome },
    { title: THE_LEFT_NAV_TILES.COATS, path: mdiHome },
    { title: THE_LEFT_NAV_TILES.TOPS, path: mdiHome },
    { title: THE_LEFT_NAV_TILES.KNITWEAR, path: mdiHome },
  ]

  return (
    <nav className=" col-span-3">
      {TILES.map(({ title, path }) => (
        <NavTile title={title} path={path} key={title} />
      ))}
    </nav>
  )
}

export default TheLeftNav
