export class MixBaseService {
    protected baseUrl: string | undefined;

    public setBaseUrl(url: string): void {
        this.baseUrl = url;
    }
}