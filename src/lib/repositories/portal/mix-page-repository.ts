import { MixModelType } from '../../enums/mix-enums';
import { MixRestPortalRepository } from '../../infrastructure/base/mix-rest-portal-repository';
import { MixPostPortalModel } from '../../models/portal/mix-post-portal-model';

export class PageService extends MixRestPortalRepository<MixPostPortalModel> {
  constructor() {
    super(MixModelType.Page);
  }
}
