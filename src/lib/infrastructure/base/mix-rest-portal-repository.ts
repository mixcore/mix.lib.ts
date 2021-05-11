import { LocalStorageKeys } from '../../constants/local-storage-keys';
import { MixModelType } from '../../enums/mix-enums';
import { getDefaultAxiosConfiguration } from '../../helpers/mix-helper';

import { MixRestRepository } from './mix-rest-repository';
export class MixRestPortalRepository<T> extends MixRestRepository<T> {
  constructor(modelName: MixModelType) {
    const appUrl =
      localStorage.getItem(LocalStorageKeys.CONF_APP_URL) ||
      window.location.origin;
    const specificulture = localStorage.getItem(
      LocalStorageKeys.CONF_CURRENT_CULTURE
    );
    const viewName = 'mvc';
    const conf = getDefaultAxiosConfiguration();
    conf.baseURL = appUrl;
    conf.withCredentials = false;
    super(appUrl, modelName, viewName, specificulture, conf);
  }
}
