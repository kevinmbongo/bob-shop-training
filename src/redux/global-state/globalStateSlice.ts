import { createSlice } from '@reduxjs/toolkit'

type GlobalState = {
  status: string
  currentFilter: string
}

const initialState: GlobalState = { status: 'idle', currentFilter: '' }

export const globalState = createSlice({
  name: 'globalState',

  initialState,
})
