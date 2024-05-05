import axios from "axios";

export const AUTHORIZATION = "authorization";
export const proxy = "https://cors-anywhere.herokuapp.com/";
export const API = axios.create({
  baseURL: 'https://api.weekday.technology',
  headers: {
    
  },
});

