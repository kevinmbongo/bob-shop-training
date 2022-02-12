import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THE_LEFT_NAV_TILES } from '../../constants'
import { RootState } from '../store'

type GlobalState = {
  status: string
  currentFilter: string
}

const initialState: GlobalState = {
  status: 'idle',
  currentFilter: THE_LEFT_NAV_TILES.HOME,
}

export const globalStateSlice = createSlice({
  name: 'globalState',

  initialState,

  reducers: {
    setCurrentFilter: (state: GlobalState, action: PayloadAction<string>) => {
      state.currentFilter = action.payload
    },
  },
})

export const { setCurrentFilter } = globalStateSlice.actions

export const selectGlobalState = (state: RootState): GlobalState =>
  state.globalState

export default globalStateSlice.reducer
