import { AxiosRequestConfig } from 'axios';
import { SearchFilter } from '../infrastructure/dtos/search-filter';
import { Api } from '../infrastructure/axios/api';
export class MixRestService<T> extends Api {
  public modelUrl: string;
  constructor(
    appUrl: string,
    modelName: string,
    viewName: string,
    specificulture?: string,
    config?: AxiosRequestConfig
  ) {
    super(config);
    this.instance.defaults.baseURL = appUrl;
    this.modelUrl = `${modelName}/${viewName}`;
    if (specificulture) {
      this.modelUrl = `${specificulture}/${modelName}/${viewName}`;
    }
  }

  public getSingleModel(id: any, queries?: any): Promise<T> {
    this.instance.defaults.params = queries;
    return this.get(`${this.modelUrl}/${id}`);
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
}
