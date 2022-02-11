import { mdiFilterOutline, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

const TheMainArticle: React.FC = () => {
  return (
    <article className="col-span-9 my-5">
      {' '}
      <header>
        <h2 className="font-extrabold text-4xl mb-2">COATS</h2>
        <p className="font-bold text-sm mb-7">View more</p>
      </header>
      <section>
        <nav className="flex justify-around ">
          {' '}
          <div className="font-bold text-xs  border-black border rounded-xl  p-3 flex items-center mx-2 ">
            <Icon path={mdiFilterOutline} size={0.7} color="black" />
            <p className=" pl-3 ">Sort</p>
          </div>
          <div className="font-bold text-xs  bg-black rounded-xl  p-3 flex items-center ">
            <Icon path={mdiPlus} size={0.7} color="white" />
          </div>
        </nav>
      </section>
    </article>
  )
}

export default TheMainArticle
