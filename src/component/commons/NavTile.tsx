import Icon from '@mdi/react'
import classNames from 'classnames'
import React from 'react'
import {
  selectGlobalState,
  setCurrentFilter,
} from '../../redux/global-state/globalStateSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

type NavTileProps = {
  title: string
  path: string
}

const NavTile: React.FC<NavTileProps> = ({ title, path }) => {
  const { currentFilter } = useAppSelector(selectGlobalState)

  const dispatch = useAppDispatch()

  function handleCategoryChange() {
    dispatch(setCurrentFilter(title))
  }
  return (
    <button
      onClick={handleCategoryChange}
      className={classNames(
        'w-full bg-grey my-4 rounded-lg flex items-center justify-between py-5 px-8 transition-all duration-300 linear',
        title === currentFilter && 'bg-purples text-white'
      )}
    >
      <span className="font-bold">{title}</span>
      <Icon
        path={path}
        size={1}
        color={title === currentFilter ? 'white' : 'black'}
      />
    </button>
  )
}

export default NavTile
