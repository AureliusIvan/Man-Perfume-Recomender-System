import axios from "axios";
import {getCookie} from "react-use-cookie";

const API = "https://api-server-v1-penelitian.pemilihanparfumkekinian.com";
const TOKEN: string = getCookie("TOKEN");

const axiosClient = axios.create({
  baseURL: API,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
    Authorization: TOKEN && `Bearer ${TOKEN}`,
  },
  timeout: 10000,
});

const axiosClientGuest = axios.create({
  baseURL: API,
  headers: {
    "Accept": "application/json",
  },
  timeout: 10000,
});


export async function get(URL: string) {
  return axiosClient.get(`/${URL}`).then(response => response);
}


export async function getGuest(URL: string) {
  return axiosClientGuest.get(`/${URL}`).then(response => response);
}


export async function post(URL: string, payload: FormData | any) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export async function postGuest(URL: string, payload: FormData | any) {
  return axiosClientGuest.post(`/${URL}`, payload).then(response => response);
}

export async function patch(URL: string, payload: FormData | any) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export async function del(URL: string) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}