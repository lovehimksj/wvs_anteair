import {Component, OnInit} from '@angular/core';
import {UserRegister} from '../../constructor/user-register';
import {AccountService} from '../../service/account/account.service';
import sha256 from 'crypto-js/sha256';
import {Router} from "@angular/router";
declare let jquery: any;
declare let $: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private isLoading = false;
	private errorMessage: string;
	private account: UserRegister = new UserRegister();

	constructor(private accountService: AccountService, private router: Router) {
	}

	ngOnInit() {
	}


	register() {
		this.isLoading = true;
		this.errorMessage = '';
		this.account.password = sha256(this.account.password);
		this.router.navigateByUrl('/merchantBoarding');
		$('#registerModal').modal('hide');
		/*this.accountService.addAdvertiser({'advertiser' : this.account})
			.finally(() => {
				this.isLoading = false;
			})
			.subscribe(response => {
				console.log(response);
			}, error => {
				this.errorMessage = error;
			});*/
	}
}