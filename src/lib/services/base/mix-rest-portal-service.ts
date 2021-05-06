import { LocalStorageKeys } from '../../constants/local-storage-keys';
import { getDefaultAxiosConfiguration } from '../../helpers/mix-helper';
import { MixRestService } from './mix-rest-service';
export class MixRestPortalService<T> extends MixRestService<T> {
  constructor(modelName: string) {
    let appUrl =
      localStorage.getItem(LocalStorageKeys.CONF_APP_URL) ||
      window.location.origin;
    let specificulture = localStorage.getItem(
      LocalStorageKeys.CONF_CURRENT_CULTURE
    );
    let viewName = 'mvc';
    var conf = getDefaultAxiosConfiguration();
    conf.baseURL = appUrl;
    conf.withCredentials = false;
    super(appUrl, modelName, viewName, specificulture, conf);
  }
}
