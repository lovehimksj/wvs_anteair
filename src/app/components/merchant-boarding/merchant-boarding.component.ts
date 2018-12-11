import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {AccountService} from '../../service/account/account.service';
import {MerchantProfile, ServiceType} from '../../constructor/merchant-profile';
import {UserProvider} from '../../package/provider/user.provider';
import {MasterService} from '../../service/masterData/master.service';

declare let jquery: any;
declare let $: any;

@Component({
	selector: 'app-merchant-boarding',
	templateUrl: './merchant-boarding.component.html',
	styleUrls: ['./merchant-boarding.component.css'],
})
export class MerchantBoardingComponent implements OnInit {
	public serviceType: ServiceType = new ServiceType().serviceType;
	public selectedServices = [];
	public fileObject: object = {};
	public filename: object = {};
	public step1: boolean = true;
	public step2: boolean = false;
	public step3: boolean = false;
	public step4: boolean = false;
	public city_list: any = [];
	public state_list: any = [];
	public rows: any = [0];
	public companyType: any = [];
	public account: MerchantProfile = new MerchantProfile();

	constructor(private accountService: AccountService,
				private master: MasterService,
				private userProvider: UserProvider) {
	}

	ngOnInit() {
		console.log(this.userProvider.getCurrentUser().stepStatus);
		if (this.userProvider.getCurrentUser()) {
			if (this.userProvider.getCurrentUser().stepStatus === null) {
				this.step1 = true;
				this.step2 = false;
				this.step3 = false;
				this.step4 = false;
			} else if (this.userProvider.getCurrentUser().stepStatus === 'C') {
                this.step1 = false;
                this.step2 = true;
                this.step3 = false;
                this.step4 = false;
            } else if (this.userProvider.getCurrentUser().stepStatus === 'B') {
				this.step1 = false;
				this.step2 = false;
				this.step3 = true;
				this.step4 = false;
			} else if (this.userProvider.getCurrentUser().stepStatus === 'W' || this.userProvider.getCurrentUser().stepStatus === 'COMPLETED') {
				this.step1 = false;
				this.step2 = false;
				this.step3 = false;
				this.step4 = true;
			}
		}
		this.master.getAllCompanyType().subscribe(data => {
			this.companyType = data;
		},error2 => {

		});

		this.master.getAllServices().subscribe(data => {
			this.serviceType = data;
		},error2 => {

		});

		this.master.getAllState().subscribe(data => {
			this.state_list = data;
		},error2 => {

		});

	}

	public getCityByState(event) {
		console.log(event);
		this.master.getCityByStateId(event.target.value).subscribe(data => {
			this.city_list = data;
		},error2 => {

		});
	}

	public fileEvent($event, key) {
		console.log(key);
		let fileSelected: File = $event.target.files[0];
		console.log(fileSelected);
		this.fileObject[key] = $event.target.files[0];
		this.filename[key] = $event.target.files[0].name;
	}

	public selectService(e, type) {
		if (e.target.checked) {
			this.selectedServices.push(parseInt(type));
		}
		else {
			let updateItem = this.selectedServices.find(this.findIndexToUpdate, type);
			let index = this.selectedServices.indexOf(updateItem);
			this.selectedServices.splice(index, 1);
		}
	}

	public merchantCompanyDetails() {
		if (this.account) {
			this.accountService.addMerchantCompany(this.account, this.fileObject, this.selectedServices)
				.finally(() => {
					console.log('final Block');
				}).subscribe(response => {
				console.log(response);
				this.step2 = true;
				this.step1 = false;
				this.userProvider.updateCurrentUser({"stepStatus":"C"});
				console.log('success Block');
			}, error => {
				console.log(error);
				console.log('error Block');
			});
		}
	}

	public merchantBankDetails() {
		if (this.account) {
			this.accountService.addMerchantBank(this.account, this.fileObject)
				.finally(() => {
					console.log('final Block');
				}).subscribe(response => {
				console.log(response);
				this.step3 = true;
				this.step2 = false;
				this.userProvider.updateCurrentUser({"stepStatus":"B"});
				console.log('success Block');
			}, error => {
				console.log(error);
				console.log('error Block');
			});
		}
	}

	public merchantWareHouse() {
		this.accountService.addMerchantWareHouse(this.account, this.fileObject)
			.finally(() => {
				console.log('final block');
			})
			.subscribe(
				response => {
					console.log('succcess' + JSON.stringify(response));
					this.step3 = false;
					this.step4 = true;
					this.userProvider.updateCurrentUser({"stepStatus":"W"});
				},
				error => {
					console.log('error' + JSON.stringify(error));
				}
			)
	}

	findIndexToUpdate(type) {
		return type.maintenancetype === this;
	}

	public addMoreWarehouse = function (row) {
		this.rows.push(row.length);
	}

}
