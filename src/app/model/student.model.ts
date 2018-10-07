import { StudyProgram } from "./studyprogram.model.ts";
import { Exam } from "./exam.model.ts";
import { Document } from "./document.model.ts";
import { CourseAttending } from "./courseattending.model.ts";
import { Payment } from "./payment.model.ts";

export class Student {
	//public id: number;
	public indeks: string;
	public studyProgram: StudyProgram;
	public documentList: Array<Document>;
	public examList: Array<Exam>;
	public courseAttendingList: Array<CourseAttending>;
	public paymentList: Array<Payment>;

	public constructor()
	{	
	
	}
		
}