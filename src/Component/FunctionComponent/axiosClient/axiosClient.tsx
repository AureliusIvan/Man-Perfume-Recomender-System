import axios from "axios";
import { getCookie } from "react-use-cookie";

// Ini adalah base url dari server, kalo mau pake localhost tinggal ganti localhost:3000 nya aja
const API = "https://api-server-v1-penelitian.pemilihanparfumkekinian.com";
// const API = "https://penelitian-api.aureliusivan.my.id";

// var TOKEN = localStorage.getItem("TOKEN");
const TOKEN: string = getCookie("TOKEN");
// Ini adalah konfigurasi axios, kalo mau tambahin header atau apa bisa ditambahin disini

const axiosClient = axios.create({
    baseURL: API,
    headers: {
        "Content-type": "application/json" || "multipart/form-data",
        "Accept": "application/json",
        Authorization: TOKEN && `Bearer ${TOKEN}`,
    },
    timeout: 10000,
});

const axiosClientGuest = axios.create({
    baseURL: API,
    headers: {
        "Content-type": "application/json" || "multipart/form-data",
        "Accept": "application/json",
    },
    timeout: 10000,
});


// Ini adalah interceptor, gunanya untuk menangkap error dari server
// axiosClient.interceptors.request.use(
//     async (config) => {
//         // alert("interceptor");
//         // console.log("interceptor request success");
//         // Do something before request is sent
//         return config;
//     },
//     (error) => {
//         // console.log("interceptor request error");
//         // Do something with request error
//         return Promise.reject("An error occurred on the client, check your internet connection");
//     }
// );


// axiosClient.interceptors.response.use(
//     (response) => {
//         // alert("interceptor");
//         // console.log("interceptor response success");
//         // Do something before request is sent
//         return response;
//     },
//     (error) => {
//         // console.log("interceptor response error");
//         // Do something with request error
//         return Promise.reject("Validation failed");
//     }
// );


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