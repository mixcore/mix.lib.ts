import { MixAxios } from './axios-api-service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';

export class BaseRestApiService extends MixAxios {
  public constructor(apiUrl: string, withCredentials?: boolean) {
    super(apiUrl, withCredentials);
  }

  public get<TResponse>(
    url: string,
    params?: any
  ): Observable<AxiosResponse<TResponse>> {
    let request: AxiosRequestConfig = {
      method: 'GET',
      url: url,
      params: params,
    };
    return this.sendRequest<TResponse>(request);
  }
}
