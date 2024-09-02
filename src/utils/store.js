import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import suggestionsSlice from './SuggestionsSlice'
import searchSlice from './searchSlice'
import chatSlice from './chatSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    suggestions: suggestionsSlice,
    search: searchSlice,
    chat: chatSlice,
  },
})

export default store
