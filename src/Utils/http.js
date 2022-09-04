import axios from "axios";
import URL from "../globals/Config";
import * as session from "../Utils/Session";
import showNotification from "../services/NotificationService";

/* Create a instance of axios with a custom config*/
export const http = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "multipart/form-data",
  },
});

/*Add a request interceptor */
http.interceptors.request.use(
  function (config) {
    const token = session.getToken();
    if (token) {
      config, (headers[`x-token`] = `Bearer ${token}`);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/*Add a respone interceptor */

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 400) {
      showNotification("danger", error.response.data.message);
    }
    if (error.response.status === 403) {
      showNotification("danger", error.response.data.message);
    }
    if (error.response) {
      if (401 == error.response.status) {
        /*Add a 401 response interceptor */
        showNotification("danger", error.response.data.message);
        localStorage.clear();
      } else {
        return Promise.reject(error);
      }
    }
  }
);
