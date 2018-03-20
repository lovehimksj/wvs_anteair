import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenMapper} from '../../package/mapper/token.mapper';
import {UserProvider} from '../../package/provider/user.provider';
import {Observable} from 'rxjs/Observable';
import {AccessToken} from '../../constructor';
import {environment} from '../../../environments/environment';
import {CurrentUser} from '../../constructor/current-user';
import {SessionService} from '../../package/session/session.service';
import {Router} from '@angular/router';
import {RestApi} from '../../package/communication/';

@Injectable()
export class AccountService {
	private currentUser: CurrentUser;

	constructor(private httpClient: HttpClient,
				private userProvider: UserProvider,
				private sessionService: SessionService,
				private router: Router,
				private restApi: RestApi,
				private tokenMapper: TokenMapper) {
	}

	public signIn(account: any): Observable<AccessToken> {
		const headers = new HttpHeaders()
			.set('Authorization', 'Basic ' + btoa('clientapp' + ':' + '123456'));
		const uri = this.baseUri() + environment.oAuth + '?&grant_type=password&username=' + account.username + '&password=' + account.password;
		return this.httpClient.post(uri, null, {headers})
			.map(response => {
				return this.tokenMapper.mapResponseToAccessToken(response);
			})
			._do(accessToken => {
				this.userProvider.setCurrentUser(accessToken);
			});
	}

	public signOut() {
		this.currentUser = null;
		this.sessionService.clearSession();
		this.userProvider.setCurrentUser(null);
		this.router.navigateByUrl('/')
	}

	public getOtp(account: any): Observable<any> {
		const url = `${environment.updatePassword}&email=${account.username}`;
		return this.restApi.post(url, null, account);
	}

	public addUser(account: any): Observable<any> {
		const url = `${environment.register}`;
		return this.restApi.post(url, null, account);
	}

	public addMerchantCompany(account: any, fileObject:any, serviceList: any): Observable<any> {
		account['user_id'] = this.userProvider.getUserId();
		account['service_check'] = serviceList;
		const url = `${environment.Add_Company}`;
		let formData = new FormData();
		formData.append('user_id', account.user_id);
		formData.append('company_name', account.company_name);
		formData.append('brand_name', account.brand_name);
		formData.append('service_check', account.service_check);
		formData.append('company_type_id', account.company_type_id);
		formData.append('city_id', account.city_id);
		formData.append('address', account.address);
		formData.append('pin', account.pin);
		formData.append('state_id', account.state_id);
		formData.append('website', account.website);
		formData.append('company_id_proof_mul', fileObject.company_id_proof_mul);
		formData.append('address_proof_mul', fileObject.address_proof_mul);
		formData.append('pancard_mul', fileObject.pancard_mul);
		formData.append('gstin_mul', fileObject.gstin_mul);
		formData.append('tan_number_mul', fileObject.tan_number_mul);
		console.log(JSON.stringify(formData));
		return this.restApi.post(url, null, formData);
	}

	public addMerchantBank(account: any, fileObject:any): Observable<any> {
		const url = `${environment.Add_Bank}`;
		account['user_id'] = this.userProvider.getUserId();
		let formData = new FormData();
		formData.append('user_id', account.user_id);
		formData.append('account_name', account.account_name);
		formData.append('account_type_id', account.account_type_id);
		formData.append('account_number', account.account_number);
		formData.append('branch_name', account.branch_name);
		formData.append('ifsc_code', account.ifsc_code);
		formData.append('cancel_cheque_mul', fileObject.cancel_cheque_mul);
		console.log(JSON.stringify(formData));
		return this.restApi.post(url, null, formData);
	}

	public addMerchantWareHouse(account: any, fileObject:any): Observable<any> {
		let formData = new FormData();
		account['user_id'] = this.userProvider.getUserId();
		account['default_pickup'] = true;
		account['default_billing'] = true;
		formData.append('user_id', account.user_id);
		formData.append('vendor_name', account.vendor_name);
		formData.append('contact_name', account.contact_name);
		formData.append('contact_number', account.contact_number);
		// formData.append('default_pickup', account.default_pickup);
		// formData.append('default_billing', account.default_billing);
		formData.append('address_one', account.address_one);
		formData.append('address_two', account.address_two);
		formData.append('state_id', account.warehouse_state_id);
		formData.append('city_id', account.warehouse_city_id);
		formData.append('pin', account.warehouse_pin);
		formData.append('address_proof_mul', fileObject.wareHouse_address_proof_mul);
		const url = `${environment.Add_WareHouse}`;
		return this.restApi.post(url,null, formData)
	}

	public updatePassword(account: any): Observable<any> {
		const url = `${environment.updatePassword}&email=${account.username}&otp=${account.otp}&np=${account.newPassword}`;
		return this.restApi.post(url, null, null);
	}

	public changePassword(account: any): Observable<any> {
		const url = `${environment.updatePassword}&op=${account.oldPassword}&np=${account.newPassword}`;
		return this.restApi.post(url, null, account);
	}

	private baseUri() {
		console.log(environment.production);
		if (environment.production === false) {
			return environment.productionUrlFalse;
		} else if (environment.production === true) {
			return environment.productionUrlTrue;
		}
	}
}
