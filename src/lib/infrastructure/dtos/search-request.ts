import type { MixContentStatus } from '../../enums/mix-content-status.enum';
import type { PagingRequest } from './paging-request.dto';

export default class SearchFilter {
  public specificulture?: string;
  public fromDate?: Date;
  public toDate?: Date;
  public status?: MixContentStatus;
  public keyword?: string;
  public query?: object;
  public direction?: PagingRequest;
}
