import { Student } from "./student.model";
import { IUser } from "./user.model"

export class Document implements  DocumentInterface{
	public id: number;
	public name: string;
	public student: Student;

	constructor(documentCfg:DocumentInterface) {
		this.id = documentCfg.id;
		this.name = documentCfg.name;
		this.student = documentCfg.student;
	}
}

interface DocumentInterface {
	id?: number;
	name: string;
	student: Student;
/*	courseAttending: Array<CourseAttending>;
	courseLecture: Array<CourseLecture>;*/
}
