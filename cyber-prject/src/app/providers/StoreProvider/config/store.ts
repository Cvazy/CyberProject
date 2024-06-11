import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { rootReducer } from "../reducers";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
  });
}
