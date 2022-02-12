import { configureStore } from '@reduxjs/toolkit'
import globalStateReducer from './global-state/globalStateSlice'

export const store = configureStore({
  reducer: {
    globalState: globalStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
