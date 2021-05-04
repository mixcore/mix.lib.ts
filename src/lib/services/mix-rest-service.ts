import { AxiosRequestConfig } from 'axios';
import { getDefaultAxiosConfiguration } from '../helpers/mix-helper';
import { Api } from '../infrastructure/axios/api';
export class MixRestService extends Api {
  constructor(
    appUrl: string,
    modelName: string,
    viewName: string,
    specificulture?: string,
    config?: AxiosRequestConfig
  ) {
    // NEVER FORGET THE SUPER
    config = config || getDefaultAxiosConfiguration();
    config.baseURL = `${appUrl}/${modelName}/${viewName}`;
    if (specificulture) {
      config.baseURL = `${appUrl}/${specificulture}/${modelName}/${viewName}`;
    }
    super(config);
  }
}
