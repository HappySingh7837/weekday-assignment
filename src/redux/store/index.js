import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, createMigrate } from "redux-persist";

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware:
    process.env.NODE_ENV !== "production"
      ? [thunkMiddleware, loggerMiddleware]
      : [thunkMiddleware],
});

const persistor = persistStore(store);

export const dispatch = store.dispatch;
export { store, persistor };
