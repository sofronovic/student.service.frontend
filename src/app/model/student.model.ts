<<<<<<< HEAD
import { StudyProgram } from "./studyprogram.model";
import { Exam } from "./exam.model";
import { Document } from "./document.model";
import { Payment } from "./payment.model";
//import { User } from "./user.model";
import { CourseAttending } from "./courseattending.model";

export class Student implements StudentInterface {
	//public id: number;
	public indeks: string;
	public studyProgram: StudyProgram;
	public documentList: Array<Document>;
	public examList: Array<Exam>;
	public courseAttendingList: Array<CourseAttending>;
	public paymentList: Array<Payment>;

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