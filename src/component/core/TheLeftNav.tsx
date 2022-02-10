import { mdiAbacus, mdiHome } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import NavTile from '../commons/NavTile'

const ICON_STYLE = { size: 0.7, color: 'black' }

const TheLeftNav: React.FC = () => {
  const TILES = [
    { title: 'lorem1', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
    { title: 'lorem2', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
    { title: 'lorem3', icon: <Icon path={mdiAbacus} {...ICON_STYLE} /> },
    { title: 'lorem4', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
  ]

  return (
    <nav className=" col-span-3">
      {TILES.map(({ title, icon }) => (
        <NavTile title={title} icon={icon} />
      ))}
    </nav>
  )
}

export default TheLeftNav
