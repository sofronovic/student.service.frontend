export class Student implements StudentInterface{
	public id: number;
	public index: string;
	public firstName: string;
	public lastName: string;
		
	constructor(studentCfg:StudentInterface)
	{	
		this.id = studentCfg.id;
		this.index = studentCfg.index;
		this.firstName = studentCfg.firstName;
		this.lastName = studentCfg.lastName;		
	}
}

interface StudentInterface{
	id?: number;
	index: string;
	firstName: string;	
	lastName: string;
}