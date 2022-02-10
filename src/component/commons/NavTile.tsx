import React from 'react'

type NavTileProps = {
  title: string
  icon: JSX.Element
}

const NavTile: React.FC<NavTileProps> = ({ title, icon }) => (
  <div className="bg-gray my-4 rounded-lg flex items-center justify-between py-5 px-8">
    <h3>{title}</h3>
    {icon}
  </div>
)

export default NavTile
