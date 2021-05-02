import { AxiosHttpClient } from './http-client';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AUTHORIZATION } from '../constants/local-storage-keys';
import { AxiosRequestConfig } from 'axios';

export abstract class ApiService<TResponse> extends AxiosHttpClient {
  protected get apiUrl(): string {
    return '';
  }

  public constructor(apiUrl: string, withCredentials?: boolean) {
    super(apiUrl, withCredentials);
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
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

  public get(url: string, params?: any): Observable<AxiosResponse<TResponse>> {
    let request: AxiosRequestConfig = {
      method: 'GET',
      url: url,
      params: params,
    };
    return this.sendRequest<TResponse>(request);
  }
}
