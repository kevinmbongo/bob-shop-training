import { mdiHeartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

const TheMainNav: React.FC = () => {
  return (
    <header>
      <nav className="m-5 flex justify-between">
        <img src="/images/logo-wearism.png" alt="logo shop" />
        <input type="text" className="border" />

        <div className="flex justify-between ">
          <div>
            <Icon path={mdiHeartOutline} size={1} color="black" />
          </div>
          <div className=" mx-5 bg-black rounded-full w-6 h-6 flex justify-center items-center">
            <span className=" text-white text-xs">0</span>
          </div>
          <span className="font-bold">US</span>
        </div>
      </nav>
      <div></div>
    </header>
  )
}

export default TheMainNav
