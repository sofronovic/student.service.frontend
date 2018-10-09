export class User implements IUser {
	public id: number;
	public username: string;
	public firstname: string;
	public lastname: string;
	public birthday: string;
	public email: string;

	public constructor(iUser: IUser)
	{
		this.id = iUser.id;
		this.username = iUser.username;
		this.firstname = iUser.firstname;
		this.lastname = iUser.lastname;
		this.birthday = iUser.birthday;
		this.email = iUser.email;
	}
}

interface IUser {
	id?: number;
	username: string;
	firstname: string;
	lastname: string;
	birthday: string;
	email: string;
}
