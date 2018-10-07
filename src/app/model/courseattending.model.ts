import { Student } from "./student.model";
import { Subject } from "./subject.model";
import { StudyProgram } from "./studyprogram.model";

export class CourseAttending {
	public id: number;
	public student: Student;
	public studyProgram: StudyProgram;
	public subject: Subject;

	public constructor() {
		
	}
}