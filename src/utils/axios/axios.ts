import axios, { AxiosError } from 'axios'

const instance = axios.create({
    baseURL: "http://121.66.14.43:9192",
    timeout: 100000
});
instance.interceptors.request.use(
    function (config) {
        return config;
    }, 
    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
export default instance;





// import axios from "axios";
// import { useHistory } from "react-router-dom";

// export const MainURL = "http://121.66.14.43:9192";

// export function request(method: any, url: string, header?: string, data?: any) {
//   return axios({
//     method,
//     url: MainURL + url,
//     headers: header,
//     data: data,
//   })
//     .then((res) => {
//       console.log("다 받기 성공");
//       console.log(res);
//       return res;
//     })
//     .catch((e) => {
//       console.log(MainURL + url);
//       console.error(e);
//     });
// }

// export function useRefresh(method: string, url: string, data: ) {
//   const history = useHistory();
//   return axios({
//     method,
//     url: MainURL + url,
//     headers: { Authorization: localStorage.getItem("refresh-token") },
//     data: data,
//   })
//     .then((res) => {
//       localStorage.setItem("access-token", res.data.access_token);
//     })
//     .catch(() => {
//       localStorage.removeItem("access-token");
//       localStorage.removeItem("refresh-token");
//       history.push("/admin");
//     });
// }
