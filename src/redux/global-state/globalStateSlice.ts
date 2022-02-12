import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THE_LEFT_NAV_TILES } from '../../constants'
import { Product } from '../../types'
import { RootState } from '../store'
const PRODUCT_LIST = [
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

type GlobalState = {
  status: string
  currentFilter: string
  products: Array<Product>
  filteredProducts: Array<Product>
}

const initialState: GlobalState = {
  status: 'idle',
  currentFilter: THE_LEFT_NAV_TILES.HOME,
  products: PRODUCT_LIST,
  filteredProducts: PRODUCT_LIST,
}

export const globalStateSlice = createSlice({
  name: 'globalState',

  initialState,

  reducers: {
    setCurrentFilter: (state: GlobalState, action: PayloadAction<string>) => {
      const currentCategory = action.payload

      state.currentFilter = currentCategory

      state.filteredProducts =
        currentCategory === THE_LEFT_NAV_TILES.HOME
          ? state.products
          : state.products.filter(
              ({ category }) => category === currentCategory
            )
    },
  },
})

export const { setCurrentFilter } = globalStateSlice.actions

export const selectGlobalState = (state: RootState): GlobalState =>
  state.globalState

export default globalStateSlice.reducer
