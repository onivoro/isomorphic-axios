import { AxiosRequestConfig } from "axios-types";

export interface IRetryConfig<TData> extends AxiosRequestConfig<TData> {
    retry?: number;
    retryDelay?: number;
}