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

	// public getIncommingRequests() {
	// 	return this.resApi.get<User[]>('users/requests/incomming', null);
	// }

	// public modifyRelationship(userId: number, relationshipModel: any): Observable<User> {
	// 	return this.resApi.put(`users/${userId}/relationship`, relationshipModel)
	// 		.map(response => this.userMapper.mapResponseToUser(response));
	// }
}
