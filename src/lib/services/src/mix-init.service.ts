import { InitStep } from '../../enums';
import { MixBaseService } from '../base/base.service';

export class MixInitService extends MixBaseService {
  public get getInitStatusEndpoint(): string {
    return `${this.baseUrl}/mix-tenancy/setup/get-init-status`;
  }

  public get initFullTenantEndpoint(): string {
    return `${this.baseUrl}/mix-tenancy/setup/init-full-tenant`;
  }

  public hasInit(data: InitStep): boolean {
    return data !== InitStep.Blank;
  }
}
