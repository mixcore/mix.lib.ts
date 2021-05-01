import { HttpClient, HttpParams } from 'ts-http-client';
import type { Observable } from 'rxjs';
import type { IGetParams } from '../interfaces/IGetParams';
import type { IHttpOptions } from '../interfaces/IHttpOptions';
import { FW_AUTHORIZATION, FW_DISPLAY_SPINNER, FW_HANDLE_ERROR } from '../constants/constants';

export class ApiService {
	protected get apiUrl(): string {
		return '';
	}

	constructor(public http: HttpClient) {}

	public get<TResponse>(
		url: string,
		params?: IGetParams,
		authorize: boolean = true,
		showSpinner: boolean = true,
		handleError: boolean = true
	): Observable<TResponse> {
		return this.http.get<TResponse>(
			`${this.apiUrl}${url}`,
			this.getHttpOptions(authorize, showSpinner, this.preprocessData(params), handleError)
		);
	}

	public post<TBody, TResponse>(
		url: string,
		body: TBody,
		authorize: boolean = true,
		showSpinner: boolean = true,
		additionalHttpOptions?: Partial<IHttpOptions>,
		handleError: boolean = true
	): Observable<TResponse> {
		return this.http.post<TResponse>(`${this.apiUrl}${url}`, this.preprocessData(body), <
			IHttpOptions
		>{
			...this.getHttpOptions(authorize, showSpinner, null, handleError),
			...additionalHttpOptions
		});
	}

	public put<TBody, TResponse>(
		url: string,
		body: TBody,
		authorize: boolean = true,
		showSpinner: boolean = true,
		handleError: boolean = true
	): Observable<TResponse> {
		return this.http.put<TResponse>(
			`${this.apiUrl}${url}`,
			this.preprocessData(body),
			this.getHttpOptions(authorize, showSpinner, null, handleError)
		);
	}

	public delete<TResponse>(
		url: string,
		authorize: boolean = true,
		showSpinner: boolean = true,
		handleError: boolean = true
	): Observable<TResponse> {
		return this.http.delete<TResponse>(
			`${this.apiUrl}${url}`,
			this.getHttpOptions(authorize, showSpinner, null, handleError)
		);
	}

	/**
	 * This function will pass the internal headers for checking which interceptors will be run.
	 * @see BaseInterceptor
	 */
	protected getHttpOptions(
		authorize: boolean,
		showSpinner: boolean,
		params?: IGetParams,
		handleError: boolean = true
	): IHttpOptions {
		var headers = {
			[FW_DISPLAY_SPINNER]: showSpinner.toString(),
			[FW_HANDLE_ERROR]: handleError.toString()
		};
		if (authorize) {
			headers[FW_AUTHORIZATION] = `Bearer ${localStorage.getItem(FW_AUTHORIZATION)}`;
		}
		return {
			headers: headers,
			params: this.parseHttpGetParam(params)
		};
	}

	/**
	 * We remove all null props because it's not necessary. And in server dotnet core, if the data is nullable => default value is null
	 * so that do not need to submit null. If data is not nullable, then if submit null can raise exception.
	 */
	private preprocessData<T>(data: T): T {
		if (data instanceof FormData) {
			return data;
		}
		return data;
	}

	private flattenHttpGetParam(
		inputParams?: IGetParams,
		returnParam: IGetParams = {},
		prefix?: string
	): IGetParams {
		for (const paramKey in inputParams || {}) {
			const inputParamValue = inputParams[paramKey];
			const inputParamFinalKey = prefix ? `${prefix}.${paramKey}` : paramKey;
			if (inputParamValue instanceof Array) {
				returnParam[inputParamFinalKey] = inputParamValue;
			} else if (typeof inputParamValue === 'object') {
				this.flattenHttpGetParam(inputParamValue, returnParam, paramKey);
			} else if (inputParamValue != null) {
				returnParam[inputParamFinalKey] = inputParamValue.toString();
			}
		}

		return returnParam;
	}

	private parseHttpGetParam(inputParams?: IGetParams): HttpParams {
		let returnParam = new HttpParams();
		const flattenedInputParams = this.flattenHttpGetParam(inputParams);
		for (const paramKey in flattenedInputParams) {
			if (flattenedInputParams.hasOwnProperty(paramKey)) {
				const inputParamValue = flattenedInputParams[paramKey];
				if (inputParamValue instanceof Array) {
					inputParamValue.forEach((p) => {
						returnParam = returnParam.append(paramKey, p);
					});
				} else {
					returnParam = returnParam.append(paramKey, inputParamValue.toString());
				}
			}
		}
		return returnParam;
	}
}
