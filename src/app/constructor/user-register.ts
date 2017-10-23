export class UserRegister {
	advertiserName: string;
	companyName: string;
	advertiserEmailId: string;
	advertiserMobileNumber: string;
	password: string;

	constructor(
		advertiserName?: string,
		companyName?: string,
		advertiserEmailId?: string,
		advertiserMobileNumber?: string,
		password?: string
	) {

		this.advertiserName = advertiserName;
		this.companyName = companyName;
		this.advertiserEmailId = advertiserEmailId;
		this.advertiserMobileNumber = advertiserMobileNumber;
		this.password = password;

	}
}
