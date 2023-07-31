export const TOKEN_KEY = "@bioseta-Token";
export const EXP_KEY = "@bioseta-Expration";

//token
export const isToken = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
//data
export const getData = () => localStorage.getItem(EXP_KEY);
export const setData = (data) => localStorage.setItem(EXP_KEY, data); ;