import { MixBaseService } from "../base/base.service";

export class MixSharedService extends MixBaseService {
    private culturesRoute: string = '/shared/json-data/Cultures'

    public get getCulturesApi(): string {
        return `${this.baseUrl}${this.culturesRoute}`;
    }
    public get getGlobalSettings(): string {
        return `${this.baseUrl}/shared/get-global-settings`;
    }
    public get signIn(): string {
        return `${this.baseUrl}/mix-account/login`;
    }
}
