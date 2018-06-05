import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class RestApi {
    private header: HttpHeaders;

    constructor(private httpClient: HttpClient) {
    }

    public get<T>(requestUri: string, param: any): Observable<T> {
        return this.httpClient.get<T>(this.baseUri() + requestUri, {params: param})
    }

    public post<T>(requestUri: string, param: any, data: any, header: any): Observable<T> {
        this.header = new HttpHeaders({
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            // 'Accept': 'GET, POST, OPTION',
            // 'username': 'admin',
            'Content-Type': header
        });
        return this.httpClient.post<T>(this.baseUri() + requestUri, data, {params: param, headers: this.header})
    }

    public put<T>(requestUri: string, param: any, data: any): Observable<T> {
        return this.httpClient.put<T>(this.baseUri() + requestUri, data, {params: param})
    }

    public patch<T>(requestUri, data: any): Observable<T> {
        return this.httpClient.patch<T>(this.baseUri() + requestUri, data)
    }

    public delete<T>(requestUri): Observable<T> {
        return this.httpClient.delete<T>(this.baseUri() + requestUri);
    }

    private baseUri() {
        if (environment.production === false) {
            return environment.productionUrlFalse;
        } else if (environment.production === true) {
            return environment.productionUrlTrue;
        } else {
            return environment.productionUrlLocal;
        }
    }
}
