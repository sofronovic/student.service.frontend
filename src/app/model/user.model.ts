export class User  {
	public id: number;
	public username: string;
	public firstname: string;
	public lastname: string;
	public birthday: string;
	public email: string;

	public constructor(username: string, firstname: string, lastname: string, birthday: string, email:string) {
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthday = birthday;
		this.email = email;
	}
}
