import { MixBaseService } from "../base/base.service";

export class MixInitService extends MixBaseService {
    private initStatusRoute: string = '/mix-theme/setup/get-init-status'

    public get getInitStatusApi(): string {
        return `${this.baseUrl}${this.initStatusRoute}`;
    }
}