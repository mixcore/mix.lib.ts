import { LocalStorageKeys } from '../constants/local-storage-keys';
import { apiService } from '../infrastructure/axios/api';
import { AllSettingsResponse, GlobalSetting } from '../models/setting.models';

export class MixSettingService {
  public cachedInMinutes: number = 20;
  public globalSettings!: GlobalSetting;
  public localizeSettings?: Object;
  public translator?: Object;
  /**
   *
   */
  constructor() {
    this.getAllSettings();
  }
  public getAllSettings(culture?: string) {
    this.localizeSettings = localStorage.getItem(
      LocalStorageKeys.CONF_LOCAL_SETTINGS
    ) as Object;
    this.globalSettings = JSON.parse(
      localStorage.getItem(LocalStorageKeys.CONF_GLOBAL_SETTINGS) || ''
    ) as GlobalSetting;
    this.translator = localStorage.getItem(
      LocalStorageKeys.CONF_TRANSLATOR
    ) as Object;

    if (this.isRenewSettings()) {
      let url = `/rest/shared${
        culture ? `/${culture}` : ''
      }/get-shared-settings`;
      apiService.get<AllSettingsResponse>(url).then((response) => {
        var resp = response as AllSettingsResponse;
        this.globalSettings = resp.globalSettings || new GlobalSetting();
        this.localizeSettings = resp.localizeSettings;
        this.translator = resp.translator;
        localStorage.setItem(
          LocalStorageKeys.CONF_GLOBAL_SETTINGS,
          JSON.stringify(this.globalSettings)
        );
        localStorage.setItem(
          LocalStorageKeys.CONF_LOCAL_SETTINGS,
          JSON.stringify(this.localizeSettings)
        );
        localStorage.setItem(
          LocalStorageKeys.CONF_TRANSLATOR,
          JSON.stringify(this.translator)
        );
        localStorage.setItem(
          LocalStorageKeys.CONF_LAST_SYNC_CONFIGURATION,
          this.globalSettings.lastUpdateConfiguration.toString() || ''
        );
      });
    }
  }

  public setAppUrl(appUrl: string) {
    apiService.setAppUrl(appUrl);
  }

  private isRenewSettings(): boolean {
    let now = new Date();
    let lastSync = localStorage.getItem(
      LocalStorageKeys.CONF_LAST_SYNC_CONFIGURATION
    );
    var d = new Date(lastSync || '');
    d.setMinutes(d.getMinutes() + 20);
    return (
      !this.localizeSettings ||
      !this.globalSettings ||
      !this.translator ||
      !lastSync ||
      now > d
    );
  }
}

export const mixSettingService = new MixSettingService();
