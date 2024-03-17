const scheme = process.env.API_SCHEMA;
const host = process.env.API_DOMAIN;
const path = process.env.API_PATH;

const url = `${scheme}://${host}`;

// // AUTH
export const login = `${url}/${path}/login`;
export const logout = `${url}/${path}/logout`;
export const register = `${url}/${path}/register`;
