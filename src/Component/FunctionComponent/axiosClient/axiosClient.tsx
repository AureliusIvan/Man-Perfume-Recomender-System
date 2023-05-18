import axios from "axios";
import { getCookie } from "react-use-cookie";

// Ini adalah base url dari server, kalo mau pake localhost tinggal ganti localhost:3000 nya aja
const API = "https://api-server-v1-penelitian.pemilihanparfumkekinian.com";
// const API = "https://penelitian-api.aureliusivan.my.id";

// var TOKEN = localStorage.getItem("TOKEN");
var TOKEN = getCookie("TOKEN");
// Ini adalah konfigurasi axios, kalo mau tambahin header atau apa bisa ditambahin disini
const axiosClient = axios.create({
    baseURL: API,
    headers: {
        // ini standard buat ngirim data ke server
        "Content-type": "application/json" || "multipart/form-data",
        "Accept": "application/json",
        // ini untuk ngirim token ke server, kalo mau pake bearer bisa pake ini
        // Harus tanya farel pake sistem bearer atau apa?
        Authorization: TOKEN ? `Bearer ${TOKEN}` : "",  
    },
    // Setting timeout nya => 10 detik, jika tidak ada respon dari server maka akan error
    // Jangan lupa dikasih fallback yaa 🥰
    timeout: 10000,
    // Kalo dinyalahin suka kepentok CORS nya, jadi harus di set false (cmiiw)
    // withCredentials: false,
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

export async function get(url: string, params?: any) {
    try {
        const response = await axiosClient.get(url, { params });
        return response;
    } catch (error) {
        return error;
    }
}

export async function post(url: string, data?: any) {
    try {
        const response = await axiosClient.post(url, data);
        return response;
    } catch (error) {
        return error;
    }
}

export async function put(url: string, data?: any) {
    try {
        const response = await axiosClient.put(url, data);
        return response;
    } catch (error) {
        return error;
    }
}

export async function del(url: string, params?: any) {
    try {
        const response = await axiosClient.delete(url, { params });
        return response;
    } catch (error) {
        return error;
    }
}
