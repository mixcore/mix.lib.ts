import {
  CONF_APP_URL,
  CONF_CURRENT_CULTURE,
} from '../../constants/local-storage-keys';
import { getDefaultAxiosConfiguration } from '../../helpers/mix-helper';
import { MixRestService } from './mix-rest-service';
export class MixRestPortalService<T> extends MixRestService<T> {
  constructor(modelName: string) {
    let appUrl = localStorage.getItem(CONF_APP_URL) || window.location.origin; //'https://store.mixcore.org/api/v1/rest/';
    let specificulture = localStorage.getItem(CONF_CURRENT_CULTURE);
    let viewName = 'mvc';
    var conf = getDefaultAxiosConfiguration();
    conf.withCredentials = false;
    super(appUrl, modelName, viewName, specificulture, conf);
  }
}
