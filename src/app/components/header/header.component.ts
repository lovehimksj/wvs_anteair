import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/account/account.service';
import {UserProvider} from '../../package/provider/user.provider';
import {CurrentUser} from '../../constructor/current-user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	private user: CurrentUser = new CurrentUser();

	constructor(private accountService: AccountService, private userProvider: UserProvider) {
	}

	ngOnInit() {
		this.getUser();
		console.log(this.user);
	}

	getUser() {
		this.user = this.userProvider.getCurrentUser();
	}

	logout() {
		this.accountService.signOut();
	}
}
