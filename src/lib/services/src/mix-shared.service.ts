import { MixBaseService } from "../base/base.service";

export class MixSharedService extends MixBaseService {
    public get getCulturesApi(): string {
        return `${this.baseUrl}/shared/json-data/Cultures`;
    }

    public get getGlobalSettings(): string {
        return `${this.baseUrl}/shared/get-global-settings`;
    }

    public get signInEndpoint(): string {
        return `${this.baseUrl}/mix-account/login`;
    }

    public get getSharedSettingEndpoint(): string {
        return `${this.baseUrl}/shared/get-shared-settings/en-US`;
    }

    public get getSharedDashboardInfoEndpoint(): string {
        return `${this.baseUrl}/mix-portal/common/en-US/dashboard`;
    }
}
