import axios from "axios";


// Ini adalah base url dari server, kalo mau pake localhost tinggal ganti localhost:3000 nya aja
const API = "https://naruto-api.fly.dev/api/v1/characters";

// Ini adalah konfigurasi axios, kalo mau tambahin header atau apa bisa ditambahin disini
const axiosClient = axios.create({
    baseURL: API,
    headers: {
        // ini standard buat ngirim data ke server
        "Content-type": "application/json" || "multipart/form-data",
        "Accept": "application/json",
        // ini untuk ngirim token ke server, kalo mau pake bearer bisa pake ini
        // Harus tanya farel pake sistem bearer atau apa?
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
    },
    // Setting timeout nya => 10 detik, jika tidak ada respon dari server maka akan error
    // Jangan lupa dikasih fallback yaa 🥰
    timeout: 10000,
    // Kalo dinyalahin suka kepentok CORS nya, jadi harus di set false (cmiiw)
    withCredentials: false,
});


// Ini adalah interceptor, gunanya untuk menangkap error dari server
axiosClient.interceptors.request.use(
    async (config) => {
        // alert("interceptor");
        console.log("interceptor success");
        // Do something before request is sent
        return config;
    },
    (error) => {
        console.log("interceptor error");
        // Do something with request error
        return Promise.reject(error);
    }
);

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
