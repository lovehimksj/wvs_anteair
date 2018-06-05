import {Injectable} from '@angular/core';
import {RestApi} from "../../package/communication";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Rx";

@Injectable()
export class WalletService {

    constructor(private resApi: RestApi) {
    }

    public getUserWithKeyValue(): Observable<any> {
        const url = `${environment.Get_User_Key_Value}`;
        return this.resApi.get<any>(`${url}`, null)
            .map(response => {
                return response;
            });
    }

    public rechargeWallet(data): Observable<any> {
        const header = 'application/json';
        const url = `${environment.Wallet_Recharge}`;
        return this.resApi.post<any>(`${url}`, null, data, header)
            .map(response => {
                return response;
            });
    }
}
