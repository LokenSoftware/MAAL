export class AuthManager
{
	private _user: User;
	
	constructor()
	{
	
	}
	
	get user(): User
	{
		return this._user;
	}
	
	set user(info: User)
	{
		this._user = info;
	}
}

export enum Provider
{
	self,
	google,
	microsoft
}

export interface User
{
	name: string;
	
	email: string;
	
	pictureUrl: string;
}
