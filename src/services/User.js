import Headers from './Headers'

const BASE_API_URL = "http://localhost:4000/api/test/";

export const getPublicContent = () => fetch(BASE_API_URL + "all")

export const getUserBoard = () => fetch(BASE_API_URL + "user", Headers())

export const getModeratorBoard = () => fetch(BASE_API_URL + "mod", Headers())

export const getAdminBoard = () => fetch(BASE_API_URL + "admin", Headers())