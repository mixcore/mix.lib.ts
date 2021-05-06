import { AxiosRequestConfig } from 'axios';
import { Api } from '../../infrastructure/axios/api';
import { SearchFilter } from '../../infrastructure/dtos/search-filter';
export class MixRestService<T> extends Api {
  public modelName: string;
  public viewName: string;
  public specificulture?: string | null;
  public get modelUrl(): string {
    return this.specificulture
      ? `/api/v1/rest/${this.specificulture}/${this.modelName}/${this.viewName}`
      : `/api/v1/rest/${this.modelName}/${this.viewName}`;
  }
  constructor(
    appUrl: string,
    modelName: string,
    viewName: string,
    specificulture?: string | null,
    config?: AxiosRequestConfig
  ) {
    super(config);
    this.instance.defaults.baseURL = appUrl;
    this.modelName = modelName;
    this.viewName = viewName;
    this.specificulture = specificulture;
  }

  public getSingleModel(id: any, queries?: any): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get(`${id}`);
  }

  public getDefaultModel(queries?: any): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get(`default`);
  }

  public getListModel(queries?: SearchFilter): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get(this.modelUrl);
  }

  public createModel(model: T): Promise<T> {
    return this.post(this.modelUrl, model);
  }

  public updateModel(id: any, model: T): Promise<T> {
    return this.put(`${this.modelUrl}${id}`, model);
  }

  public updateFields(id: any, fields: any): Promise<T> {
    return this.patch(`${this.modelUrl}/${id}`, fields);
  }

  public deleteModel(id: any): Promise<T> {
    return this.delete(`${id}`);
  }

  public duplicateModel(id: any, queries?: any): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get(`${this.modelUrl}/duplicate/${id}`);
  }

  public exportListModel(queries?: any): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get('${this.modelUrl}/export');
  }

  public clearCache(id?: any): Promise<T> {
    return this.get(`${this.modelUrl}/remove-cache/${id}`);
  }

  public setAppUrl(appUrl: string) {
    this.instance.defaults.baseURL = appUrl;
  }

  public setLanguage(specificulture: string) {
    this.specificulture = specificulture;
  }
}
