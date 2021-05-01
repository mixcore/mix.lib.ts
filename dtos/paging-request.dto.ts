import { DisplayDirection } from "../enums/display-direction.enum";

export class PagingRequest{
    public pageIndex: number;
    public page: number;
    public pageSize?: number;
    public orderBy?: string;
    public direction?: DisplayDirection = DisplayDirection.Asc;

}