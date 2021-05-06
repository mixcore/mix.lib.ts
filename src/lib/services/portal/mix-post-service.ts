import { MixModelType } from '../../enums/mix-enums';
import { MixPostPortal } from '../../view-models/portal/mix-post-portal';
import { MixRestPortalService } from '../base/mix-rest-portal-service';

export class PostService extends MixRestPortalService<MixPostPortal> {
  constructor() {
    super(MixModelType.Post);
  }
}
