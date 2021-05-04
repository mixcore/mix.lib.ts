import { DisplayDirection } from '../../enums/display-direction.enum';
import type { MixContentStatus } from '../../enums/mix-content-status.enum';

export class SearchFilter {
  public specificulture?: string;
  public fromDate?: Date;
  public toDate?: Date;
  public status?: MixContentStatus;
  public keyword?: string;
  public query?: object;
  public pageIndex: number = 0;
  public page?: number = 1;
  public pageSize?: number;
  public orderBy?: string;
  public direction?: DisplayDirection = DisplayDirection.Asc;
}
