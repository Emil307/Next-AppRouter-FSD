import { TAxiosRequestInterceptorSuccess } from "@/shared/api";

export const tokenInterceptor: TAxiosRequestInterceptorSuccess = (
  config: any
) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
};
