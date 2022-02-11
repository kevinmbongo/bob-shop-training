import React from 'react'

type CardProps = {
  image: string
}
const Card: React.FC<CardProps> = ({ image }) => (
  <article className=" rounded-lg relative h-64">
    <img
      className="w-full h-full rounded-3xl object-cover"
      src={image}
      alt="image"
    />
  </article>
)

export default Card
