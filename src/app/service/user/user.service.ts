import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {RestApi} from '../../package/communication';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {
	constructor(private resApi: RestApi) {
	}

	public getAllWareHouseByUserName(): Observable<any> {
        const url = `${environment.Get_WareHouse}`;
		return this.resApi.get<any>(`${url}`, null)
			.map(response => {
                return response;
            });
	}

    public getAllUsers(): Observable<any> {
        const url = `${environment.Get_All_Users}`;
        return this.resApi.get<any>(`${url}`, null)
            .map(response => {
                return response;
            });
    }

	// public getIncommingRequests() {
	// 	return this.resApi.get<User[]>('users/requests/incomming', null);
	// }

	// public modifyRelationship(userId: number, relationshipModel: any): Observable<User> {
	// 	return this.resApi.put(`users/${userId}/relationship`, relationshipModel)
	// 		.map(response => this.userMapper.mapResponseToUser(response));
	// }
    public updateUser(user: any) {
	    const header = 'application/json';
        const url = `${environment.Update_Admin_Users}`;
        return this.resApi.post<any>(`${url}`, null, `${JSON.stringify(user)}`,header)
            .map(response => {
                return response;
            });
    }
}
