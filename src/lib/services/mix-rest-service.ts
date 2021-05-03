import { AxiosRequestConfig } from 'axios';
import { getDefaultAxiosConfiguration } from '../helpers/mix-helper';
import { Api } from '../infrastructure/axios/api';
export class MixRestService extends Api {
  constructor(
    modelName: string,
    viewName: string,
    specificulture?: string,
    config?: AxiosRequestConfig
  ) {
    // NEVER FORGET THE SUPER
    config = config || getDefaultAxiosConfiguration();
    config.baseURL = `${config.baseURL}/${modelName}/${viewName}`;
    if (specificulture) {
      config.baseURL = `${config.baseURL}/${specificulture}/${modelName}/${viewName}`;
    }
    super(config);
  }
}
