import axios from "axios";

axios.defaults.headers.common["apikey"] =
  import.meta.env.VITE_PUBLIC_SUPPABASE_API_KEY;
axios.defaults.headers.common["Authorization"] =
  `Beader ${import.meta.env.VITE_PUBLIC_SUPPABASE_API_KEY}`;

axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method?.toUpperCase()} request sent to ${config.url} at ${new Date(new Date().getTime())}`,
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
