import store from "..";
import { _login , _logout } from ".";

export const setLogin = () => store.dispatch(_login())

export const setLogout = () => store.dispatch(_logout())