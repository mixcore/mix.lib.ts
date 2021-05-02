import { DisplayDirection } from "../enums/display-direction.enum";

export class PagingRequest{
    public pageIndex: number = 0;
    public page: number = 1;
    public pageSize?: number;
    public orderBy?: string;
    public direction?: DisplayDirection = DisplayDirection.Asc;

}
