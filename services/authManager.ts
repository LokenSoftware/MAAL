export class AuthManager
{
	private _user: User;
	
	constructor()
	{
		if (typeof googleUser !== "undefined")
		{
			console.log(googleUser);
			
		}
		else
		{
			console.log("nope");
		}
	}
	
	get user(): User
	{
		return this._user;
	}
	
	set user(info: User): void
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
