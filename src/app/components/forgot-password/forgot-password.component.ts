import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../service/account/account.service';
import {ForgotPassword} from '../../constructor/user-login';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
private account: ForgotPassword = new ForgotPassword();
private otpStatus = false;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  generateOtp() {
  	if (this.otpStatus === false) {
		this.accountService.getOtp(this.account)
			.finally(() => {
				console.log('done');
			})
			.subscribe(res => {
				console.log(res);
				this.otpStatus = true;
			}, error => {
				console.log(error);
			});
	} else if (this.otpStatus === true) {
		this.account.newPassword = sha256(this.account.newPassword);
		console.log(this.account.newPassword);
		this.accountService.updatePassword(this.account)
			.finally(() => {
				console.log('done');
			})
			.subscribe(res => {
				console.log(res);
				this.otpStatus = true;
			}, error => {
				console.log(error);
			});
	}
  }
}
