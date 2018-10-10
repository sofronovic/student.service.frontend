import { Student } from "./student.model";
import { SubjectModel } from "./subject.model";
import { StudyProgram } from "./studyprogram.model";

export class CourseAttending implements ICourseAttending {
	public id: number;
	public student: Student;
	public subject: SubjectModel;

	public constructor(courseAttending: ICourseAttending) 
	{
		this.id = courseAttending.id;
		this.student = courseAttending.student;
		this.subject = courseAttending.subject;
	}
}

interface ICourseAttending {
	id? : number;
	student: Student;
	subject: SubjectModel;
}