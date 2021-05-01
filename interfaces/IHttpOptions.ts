import type { HttpHeaders, HttpParams } from "ts-http-client";

export interface IHttpOptions {
	headers?:
		| HttpHeaders
		| {
				[header: string]: string | string[];
		  };
	params?:
		| HttpParams
		| {
				[param: string]: string | string[];
		  };
	observe?: 'body';
	responseType?: 'json';
}
