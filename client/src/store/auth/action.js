import store from "..";
import { _login , _logout } from ".";

export const setLogin = (data) => store.dispatch(_login(data))

export const setLogout = () => store.dispatch(_logout())