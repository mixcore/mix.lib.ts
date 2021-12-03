import { MixBaseService } from "../base/base.service";

export class MixInitService extends MixBaseService {
    private initStatusRoute: string = '/mix-tenancy/setup/get-init-status'

    public get getInitStatusApi(): string {
        return `${this.baseUrl}${this.initStatusRoute}`;
    }
}