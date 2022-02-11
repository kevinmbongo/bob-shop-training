import { mdiAbacus, mdiHome, mdiLightningBolt } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import NavTile from '../commons/NavTile'

const ICON_STYLE = { size: 0.7, color: 'black' }

const TheLeftNav: React.FC = () => {
  const TILES = [
    { title: 'HOME', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
    { title: 'NEW IN', icon: <Icon path={mdiLightningBolt} {...ICON_STYLE} /> },
    { title: 'COATS', icon: <Icon path={mdiAbacus} {...ICON_STYLE} /> },
    { title: 'TOPS', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
    { title: 'KNITWEAR', icon: <Icon path={mdiHome} {...ICON_STYLE} /> },
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
