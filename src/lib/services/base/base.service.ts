export class MixBaseService {
    protected baseUrl: string | undefined;

    public setBaseUrl(url: string): void {
        this.baseUrl = url;
    }

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
}