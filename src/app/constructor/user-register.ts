export class UserRegister {
	username: string;
	password: string;
	confirmPassword: string;
	email: string;
	mobile: string;
	name: string;

	constructor(username?: string,
                name?: string,
				password?: string,
				confirmPassword?: string,
				email?: string,
				mobile?: string) {

		this.username = username;
		this.name = name;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.email = email;
		this.mobile = mobile;
	}
}
