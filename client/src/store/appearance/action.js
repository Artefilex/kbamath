import store from "../";
import { _setTheme } from "./";

export const setTheme  = (data) => store.dispatch(_setTheme(data)) 