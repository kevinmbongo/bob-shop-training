import { mdiHeartOutline, mdiSearchWeb } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import Button from '../commons/button'

const TheMainNav: React.FC = () => {
  return (
    <>
      <nav className="my-5 flex justify-between items-center col-span-12">
        <img src="/images/logo-wearism.png" alt="logo shop" />
        <div className="flex rounded-lg w-6/12 text-xs bg-grey py-2.5 px-3">
          <input
            type="text"
            placeholder="Search for items, brands and inspiration"
            className="w-full bg-grey focus:outline-none"
          />
          <Icon path={mdiSearchWeb} size={1} color="grey" />
        </div>

        <div className="flex justify-between ">
          <div className="flex items-center">
            <Icon path={mdiHeartOutline} size={0.7} color="black" />
          </div>
          <div className=" mx-5 bg-black rounded-full w-6 h-6 flex justify-center items-center">
            <span className=" text-white text-xs">0</span>
          </div>
          <span className="font-bold">US</span>
        </div>
      </nav>

      <header className=" bg-pink rounded-3xl text-center font-bold py-14 my-10 col-span-12">
        <h1 className="text-2xl">
          $20 OFF $100 PLUS, <br />
          GET FREE NEXT-DAY DELIVRERY
        </h1>
        <p className="text-sm pt-2 pb-5">With color 20100</p>
        <Button text="OK" />
      </header>
    </>
  )
}

export default TheMainNav
