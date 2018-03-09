export class CurrentUser {
	public userId: number;
	public username: string;
	public scope: string;
	public onboardStatus: boolean;
	public is_approved: boolean;
	public stepStatus: string;

	constructor(userId?: number,
				username?: string,
				scope?: string,
				onboardStatus?: boolean,
				is_approved?: boolean,
				stepStatus?: string) {
		this.userId = userId;
		this.username = username;
		this.scope = scope;
		this.onboardStatus = onboardStatus;
		this.is_approved = is_approved;
		this.stepStatus = stepStatus;
	}
}
