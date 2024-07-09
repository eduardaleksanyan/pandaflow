import { configureStore } from "@reduxjs/toolkit"
import { animalApi } from "../api/Animals";

export const store = configureStore({
  reducer: {
    [animalApi.reducerPath]: animalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      animalApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch