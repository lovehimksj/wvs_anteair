import {Injectable} from '@angular/core';
import {RestApi} from '../../package/communication';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class MasterService {

	constructor(private restApi: RestApi) {
	}

	public getAllCompanyType(): Observable<any> {
		const url = `${environment.Get_All_Company_Type}`;
		return this.restApi.get(`${url}`, null).map(res => {
			return res;
		});
	}

	public getAllServices(): Observable<any> {
		const url = `${environment.Get_Services}`;
		return this.restApi.get(`${url}`, null).map(res => {
			return res;
		});
	}

	public getAllState(): Observable<any> {
		const url = `${environment.Get_State}`;
		return this.restApi.get(`${url}`, null).map(res => {
			return res;
		});
	}
<<<<<<< HEAD

	public getCityByStateId(stateId) {
		const url = `${environment.Get_City_By_State}/${stateId}`;
		return this.restApi.get(`${url}`, null).map(res => {
			return res;
		});
	}
=======
>>>>>>> origin/Developer
}
