import { MixBaseService } from "../base/base.service";

export class MixSharedService extends MixBaseService {
    public readonly getCultureApi: string = `${this.baseUrl}/`
}