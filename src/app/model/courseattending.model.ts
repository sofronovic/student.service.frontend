import { Student } from "./student.model.ts";
import { Subject } from "./subject.model.ts";
import { StudyProgram } from "./studyprogram.model.ts";

export class CourseAttending {
	public id: number;
	public student: Student;
	public studyProgram: StudyProgram;
	public subject: Subject;

	public constructor() {
		
	}
}