import { store } from "../store";

export const loaderSelector = (state) => state.common.loader;

export const userSelector = store.getState().common.userData;
