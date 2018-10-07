export class Account implements AccountInterfaces{
	public id: number;
	public accountNumber: string;
	public modelNumber: string;
	public referenceNumber: string;
	public balance: string;
		
	constructor(accountCfg:AccountInterfaces)
	{	
		this.id = accountCfg.id;
		this.accountNumber = accountCfg.accountNumber;
		this.modelNumber = accountCfg.modelNumber;
		this.referenceNumber = accountCfg.referenceNumber;	
		this.balance = accountCfg.balance;	
	}
}

interface AccountInterfaces {
	id?: number;
	accountNumber: string;
	modelNumber: string;	
	referenceNumber: string;
	balance: string;
}