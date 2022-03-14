import { MixBaseService } from "../base/base.service";

export class MixPostService extends MixBaseService {
    /**
     * @type {MixContentDefault}
     */
    public get getDefaultPostEndpoint(): string {
        return `${this.baseUrl}/mix-portal/mix-post/default?culture=en-US`;
    }
}