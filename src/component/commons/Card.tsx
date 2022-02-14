import { mdiHeartCircleOutline, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

type CardProps = {
  image: string
}

const Card: React.FC<CardProps> = ({ image }) => {
  const IconClass = true

  return (
    <article className=" rounded-lg relative h-64 ">
      <img
        className="w-full h-full rounded-3xl object-cover"
        src={image}
        alt={image}
      />
      <button className="absolute bottom-5 right-3 flex">
        <Icon path={mdiHeartCircleOutline} size={1} color="white" />
      </button>

      <button className="absolute bottom-5 right-10 flex">
        <Icon path={mdiPlus} size={1} color="white" />
      </button>
    </article>
  )
}

export default Card
