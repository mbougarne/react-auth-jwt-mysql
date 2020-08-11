import Headers from './Headers'

const BASE_API_URL = "http://localhost:8080/api/test/";

export const getPublicContent = () => {
  return fetch(BASE_API_URL + "all");
};

export const getUserBoard = () => {
  return fetch(BASE_API_URL + "user", Headers());
};

export const getModeratorBoard = () => {
  return fetch(BASE_API_URL + "mod", Headers());
};

export const getAdminBoard = () => {
  return fetch(BASE_API_URL + "admin", Headers());
};