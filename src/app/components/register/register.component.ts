import {Component, OnInit} from '@angular/core';
import {UserRegister} from '../../constructor/user-register';
import {AccountService} from '../../service/account/account.service';
import sha256 from 'crypto-js/sha256';
import {Router} from "@angular/router";
import {NotificationService} from '../../package/notification/notification.service';
declare let jquery: any;
declare let $: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private isLoading = false;
	public errorMessage: string;
	public account: UserRegister = new UserRegister();

	constructor(private accountService: AccountService, private router: Router, private notification: NotificationService) {
	}

	ngOnInit() {
	}


	register() {
		this.isLoading = true;
		this.errorMessage = '';
		// this.account.password = sha256(this.account.password);
		$('#registerModal').modal('hide');
		this.accountService.addUser(this.account)
			.finally(() => {
				this.isLoading = false;
			})
			.subscribe(response => {
				console.log(response);
				// this.router.navigateByUrl('/merchantBoarding');
			}, error => {
				this.errorMessage = error;
				console.log(error);
			});
	}
}
