import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { LocalStorageKeys } from '../../constants/local-storage-keys';
import { getDefaultAxiosConfiguration } from '../../helpers/mix-helper';

export class MixAxios {
  protected readonly instance: AxiosInstance;

  public constructor(conf?: AxiosRequestConfig) {
    let config = conf || getDefaultAxiosConfiguration();
    if (!config.baseURL) {
        if(typeof window !== 'undefined'){ // Check if local browser
            config.baseURL =
                localStorage.getItem(LocalStorageKeys.CONF_APP_URL) ||
                window.location.origin;
        }
    }
    this.instance = axios.create(config);
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    if (this.instance.defaults.withCredentials) {
      let token = this.getCredentialToken();
      if (token)
        config.headers.common[LocalStorageKeys.CONF_AUTHORIZATION] = token;
    }
    return config;
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  protected getCredentialToken(): string {
    let token = localStorage.getItem(LocalStorageKeys.CONF_AUTHORIZATION);
    return token
      ? `Bearer ${localStorage.getItem(LocalStorageKeys.CONF_AUTHORIZATION)}`
      : '';
  }
}
