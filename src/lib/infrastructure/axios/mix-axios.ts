import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { LocalStorage } from 'ts-localstorage';
import { API_CONFIGURATION } from '../../constants/api-config';
import { AUTHORIZATION } from '../../constants/local-storage-keys';

export class MixAxios {
  protected readonly instance: AxiosInstance;

  public constructor(conf?: AxiosRequestConfig) {
    let config = conf || API_CONFIGURATION;
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
      config.headers.common[AUTHORIZATION] = this.getCredentialToken();
    }
    return config;
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  protected getCredentialToken(): string {
    return `Bearer ${LocalStorage.getItem(AUTHORIZATION)}`;
  }
}
