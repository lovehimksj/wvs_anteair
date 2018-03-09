export class AccessToken {
	userId: number;
	username: string;
	scope: string;
	refreshToken: string;
	accessToken: string;
	tokenType: string;
	onboardStatus: boolean;
	is_approved: boolean;
	stepStatus: string;
	expiresIn: number;
	issued: Date;
	expires: Date;
}
