import { mdiFilterOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

const TheMainArticle: React.FC = () => {
  return (
    <article className="col-span-9 my-5">
      {' '}
      <header>
        <h2 className="font-extrabold text-4xl mb-1">COATS</h2>
        <p className="font-bold text-sm">View more</p>
      </header>
      <section>
        <nav>
          {' '}
          <div className="font-bold text-xs  border-black border rounded-xl  p-3 flex items-center ">
            <Icon path={mdiFilterOutline} size={0.7} color="black" />
            <p className=" mx-auto">Sort</p>
          </div>
        </nav>
      </section>
    </article>
  )
}

export default TheMainArticle
