import { MixBaseService } from "../base/base.service";

export class MixSharedService extends MixBaseService {
    private culturesRoute = '/shared/json-data/Cultures'

    public get getCulturesApi(): string {
        return `${this.baseUrl}${this.culturesRoute}`;
    }
    public get getGlobalSettings(): string {
        return `${this.baseUrl}/shared/get-global-settings`;
    }
    public get signInEndpoint(): string {
        return `${this.baseUrl}/mix-account/login`;
    }
}
