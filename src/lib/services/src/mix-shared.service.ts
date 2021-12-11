import { MixBaseService } from "../base/base.service";

export class MixSharedService extends MixBaseService {
    private culturesRoute: string = '/shared/json-data/Cultures'

    public get getCulturesApi(): string {
        return `${this.baseUrl}${this.culturesRoute}`;
    }
}