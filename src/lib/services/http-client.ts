import { AxiosRequestConfig, AxiosResponse } from 'Axios';
import { Axios } from 'axios-observable';
import { Observable } from 'rxjs';
import { LocalStorage } from 'ts-localstorage';
import { API_CONFIGURATION } from '../constants/api-config';
import { AUTHORIZATION } from '../constants/local-storage-keys';

export class AxiosHttpClient {
  protected readonly instance: Axios;

  public constructor(url: string, withCredentials?: boolean) {
    var config = API_CONFIGURATION;
    config.url = url;
    config.withCredentials = withCredentials;
    this.instance = Axios.create(config);
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  public sendRequest<TResponse>(
    request: AxiosRequestConfig
  ): Observable<AxiosResponse<TResponse>> {
    return this.instance.request(request);
  }

  protected getCredentialToken(): string {
    return `Bearer ${LocalStorage.getItem(AUTHORIZATION)}`;
  }
}
