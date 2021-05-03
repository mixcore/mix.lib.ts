import { AxiosRequestConfig } from 'axios';
import { API_CONFIGURATION } from '../constants/api-config';
import { Api } from '../infrastructure/axios/api';
export class MixRestService extends Api {
  constructor(
    modelName: string,
    viewName: string,
    specificulture?: string,
    config?: AxiosRequestConfig
  ) {
    // NEVER FORGET THE SUPER
    config ??= API_CONFIGURATION;
    if (specificulture) {
      config.url = `${specificulture}/${modelName}/${viewName}`;
    } else {
      config.url = `${modelName}/${viewName}`;
    }
    super(config);
  }
}
