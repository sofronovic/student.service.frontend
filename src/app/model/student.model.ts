import { StudyProgram } from "./studyprogram.model";
import { Exam } from "./exam.model";
import { Document } from "./document.model";
import { Payment } from "./payment.model";
import { User } from "./user.model";
import { CourseAttending } from "./courseattending.model";
import { IUser } from "./user.model";

export class Student extends User implements IStudent, IUser {
	public indeks: string;
	public studyProgram: StudyProgram;
	public documentList: Array<Document>;
	public examList: Array<Exam>;
	public courseAttendingList: Array<CourseAttending>;
	public paymentList: Array<Payment>;

	public constructor(iUser: IUser, iStudent: IStudent)
	{
		super(iUser);
		this.indeks = iStudent.indeks;
		this.studyProgram = iStudent.studyProgram;
	}
}

export interface IStudent {
	indeks: string;
	studyProgram: StudyProgram;
}
