import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CommunicationService} from '../communication';
import {TokenProvider} from '../oAuth/token.provider';

@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(private router: Router,
				private tokenProvider: TokenProvider,
				private communicationService: CommunicationService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.tokenProvider.getAccessToken()
			.map(accessToken => {
				this.communicationService.changeState(accessToken);
				if (accessToken != null && state.url === '/') {
					// this.router.navigateByUrl('/');
					return false;
				}
				if (accessToken == null && state.url === '/') {
					return true;
				}
				if(accessToken != null && !accessToken.onboardStatus && state.url !== '/profile'){
					this.router.navigateByUrl('/profile');
				}
				if (accessToken != null) {
					return true;
				}
				this.router.navigateByUrl('/');
				return false;
			});
	}
}


@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router,
                private tokenProvider: TokenProvider,
                private communicationService: CommunicationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.tokenProvider.getAccessToken()
            .map(accessToken => {
                this.communicationService.changeState(accessToken);
                if (accessToken != null && state.url === '/') {
                    // this.router.navigateByUrl('/');
                    return false;
                }
                if (accessToken == null && state.url === '/') {
                    return true;
                }
                if(accessToken != null && accessToken.scope === 'ROLE_ADMIN' ){
                    this.router.navigateByUrl('/admin/dashboard');
                }
                if (accessToken != null) {
                    return true;
                }
                this.router.navigateByUrl('/');
                return false;
            });
    }
}
