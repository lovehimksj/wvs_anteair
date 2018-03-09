import {Injectable} from '@angular/core';
import {AccessToken} from '../../constructor/token';

@Injectable()
export class TokenMapper {
	public mapResponseToAccessToken(response: any): AccessToken {
		console.log('inside mapper');
		const accessToken = new AccessToken();
		accessToken.accessToken = response['access_token'];
		accessToken.refreshToken = response['refresh_token'];
		accessToken.userId = Number(response['id']);
		accessToken.scope = response['scope'];
		accessToken.username = response['username'];
		accessToken.tokenType = response['token_type'];
		accessToken.expiresIn = response['expires_in'];
		accessToken.onboardStatus = response['onboardStatus'];
		accessToken.is_approved = response['is_approved'];
		accessToken.stepStatus = response['stepStatus'];
		accessToken.issued = new Date();
		accessToken.expires = new Date(new Date().getTime() + 1000 * response['expires_in']);
		return accessToken;
	}
}
