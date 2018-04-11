import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../../service/account/account.service';
import {UserLogin} from '../../constructor/user-login';
import sha256 from 'crypto-js/sha256';
import {NotificationService} from '../../package/notification/notification.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private isLoading = false;
    private error: string;
    public account: UserLogin = new UserLogin();
<<<<<<< HEAD

    constructor(private accountService: AccountService, private router: Router, private notification: NotificationService) {
    }

    ngOnInit() {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // console.log(this.returnUrl);
    }

    login() {
        this.isLoading = true;
        this.error = '';
        this.accountService.signIn(this.account)
            .finally(() => {
                this.isLoading = false;
                $('#loginModal').modal('hide');
            })
            .subscribe(response => {
                console.log(response.scope);
                if (response.scope === 'ROLE_USER') {
                    if (response['onboardStatus']) {
                        this.router.navigateByUrl('/dashboard');
                    } else {
                        this.router.navigateByUrl('/profile');
                    }
                } else if (response.scope === 'ROLE_ADMIN') {
                    this.router.navigateByUrl('/admin/dashboard');
                }
                this.notification.showSuccess(`Success`, `User Logged in successfully`);

=======

    constructor(private accountService: AccountService, private router: Router, private notification: NotificationService) {
    }

    ngOnInit() {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // console.log(this.returnUrl);
    }

    login() {
        this.isLoading = true;
        this.error = '';
        this.accountService.signIn(this.account)
            .finally(() => {
                this.isLoading = false;
                $('#loginModal').modal('hide');
            })
            .subscribe(response => {
                this.notification.showSuccess(`Success`, `User Logged in successfully`);
                if (response['onboardStatus']) {
                    this.router.navigateByUrl('/dashboard');
                } else {
                    this.router.navigateByUrl('/profile');
                }
>>>>>>> origin/Developer
            }, error => {
                this.error = error.error;
                this.notification.showError(`${this.error['error']}`, `${this.error['error_description']}`);
            });
    }
}
