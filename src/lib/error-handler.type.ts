import { AxiosResponse } from "axios";
import { IRetryConfig } from "./retry-config.interface.js";

export type TErrorHandler<TData> = (err?: any, res?: AxiosResponse<TData, IRetryConfig<TData>>) => Promise<TData>;