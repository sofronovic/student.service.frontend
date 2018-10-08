import { StudyProgram } from "./studyprogram.model";
import { Exam } from "./exam.model";
import { Document } from "./document.model";
import { Payment } from "./payment.model";
import { User } from "./user.model";
import { CourseAttending } from "./courseattending.model";

//should extend User
export class Student {
	public id: number;
	public indeks: string;
	public studyProgram: StudyProgram;
	public documentList: Array<Document>;
	public examList: Array<Exam>;
	public courseAttendingList: Array<CourseAttending>;
	public paymentList: Array<Payment>;

public constructor () {

}
//	public constructor(username: string, firstname: string, lastname: string, birthday: string, email:string, indeks: string, studyProgram: StudyProgram){
//		super(username, firstname, lastname, birthday, email);
//		this.indeks = indeks;
//		this.studyProgram = studyProgram;
//	}
}
