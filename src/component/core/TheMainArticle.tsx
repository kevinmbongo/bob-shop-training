import { mdiFilterOutline, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { THE_LEFT_NAV_TILES } from '../../constants'
import { selectGlobalState } from '../../redux/global-state/globalStateSlice'
import { useAppSelector } from '../../redux/hooks'
import Card from '../commons/Card'
import SelectFilter from '../commons/SelectFilter'

const TheMainArticle: React.FC = () => {
  const SELECTS = [
    {
      text: 'Sort',
      icon: <Icon path={mdiFilterOutline} size={0.7} color="black" />,
    },
    {
      text: 'Product type',
    },
    {
      text: 'SortStyle',
    },
    {
      text: 'Size',
    },
    {
      text: 'Colour',
    },
    {
      text: 'Price Range',
    },
  ]

  const IMAGES_CARDS = [
    {
      image: '/images/coats-femme-1.webp',
      category: THE_LEFT_NAV_TILES.COATS,
      id: 1,
    },
    {
      image: '/images/home.jpeg',
      category: THE_LEFT_NAV_TILES.HOME,
      id: 2,
    },
    {
      image: '/images/knitwear.jpeg',
      category: THE_LEFT_NAV_TILES.KNITWEAR,
      id: 3,
    },
    {
      image: '/images/top-wommen.jpeg',
      category: THE_LEFT_NAV_TILES.TOPS,
      id: 4,
    },

    {
      image: '/images/knitwear.jpeg',
      category: THE_LEFT_NAV_TILES.KNITWEAR,
      id: 5,
    },
    {
      image: '/images/coats-femme-1.webp',
      category: THE_LEFT_NAV_TILES.COATS,
      id: 6,
    },
    {
      image: '/images/top-wommen.jpeg',
      category: THE_LEFT_NAV_TILES.TOPS,
      id: 7,
    },
    {
      image: '/images/new.jpeg',
      category: THE_LEFT_NAV_TILES.NEW_IN,
      id: 8,
    },
  ]
  const { currentFilter } = useAppSelector(selectGlobalState)

  return (
    <article className="col-span-9 my-5">
      <header>
        <h2 className="font-extrabold text-4xl mb-2">{currentFilter}</h2>
        <p className="font-bold text-sm mb-7">View more</p>
      </header>

      <nav className="flex justify-around ">
        {SELECTS.map(({ text, icon }) => (
          <SelectFilter text={text} icon={icon} key={text} />
        ))}
        <div className="font-bold text-xs  bg-black rounded-xl  p-3 flex items-center ">
          <Icon path={mdiPlus} size={0.7} color="white" />
        </div>
      </nav>

      <section className="grid grid-cols-4 gap-8 my-8">
        {IMAGES_CARDS.map(({ image, id }) => (
          <Card image={image} key={id} />
        ))}
      </section>
    </article>
  )
}

export default TheMainArticle
