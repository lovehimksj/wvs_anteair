import {Component, OnInit} from '@angular/core';
import {UserRegister} from "../../constructor/user-register";

declare let jquery: any;
declare let $: any;

@Component({
	selector: 'app-merchant-boarding',
	templateUrl: './merchant-boarding.component.html',
	styleUrls: ['./merchant-boarding.component.css']
})
export class MerchantBoardingComponent implements OnInit {
	public account: any = {};
	constructor() {
	}

	ngOnInit() {
	}

	public fileEvent($event,key) {
		let fileSelected: File = $event.target.files[0];
		console.log(fileSelected);
		this.account[key] = $event.target.files[0];
	}

	merchantOnBoard() {
		console.log(this.account);
	}
}
