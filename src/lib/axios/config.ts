import axios from "axios";

export const axiosConfig = {
  suppabaseApiKey:import.meta.env.VITE_PUBLIC_SUPPABASE_API_KEY as string,
  suppabaseSecretRole: import.meta.env.VITE_SUPPABASE_SECRET_ROLE as string,
}

axios.defaults.headers.common["apikey"] = axiosConfig.suppabaseApiKey;

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



export const secretKeyHeaders = {
  apikey:axiosConfig.suppabaseSecretRole,
  Authorization:`Bearer ${axiosConfig.suppabaseSecretRole}`,
  'Content-type':'application/json',
}