import { MixModelType } from '../../enums/mix-enums';

import { MixRestPortalRepository } from './mix-rest-portal-repository';

export abstract class ViewModelBase<T> {
  public id!: string | number;
  public repository: MixRestPortalRepository<T>;
  /**
   *
   */
  constructor(modelType: MixModelType, model?: T) {
    this.repository = new MixRestPortalRepository(modelType);
    if (model) {
      this.parseView(model);
    }
  }

  public create(): Promise<T> {
    const model = this.parseModel();
    return this.repository.createModel(model);
  }
  public update(): Promise<T> {
    const model = this.parseModel();
    return this.repository.updateModel(this.id, model);
  }
  public delete(id: string | number): Promise<T> {
    return this.repository.deleteModel(id);
  }

  abstract parseModel(): T;
  abstract parseView(model: T): void;
}
