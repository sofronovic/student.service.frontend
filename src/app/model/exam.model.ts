import { Student } from "./student.model.ts";
import { CourseAttending } from "./courseattending.model.ts";

export class Exam {
	public id: number;
	public type: string;
	public student: Student;
	public courseAttending: CourseAttending;
	public score: number;
	public points: number;

	public constructor() {

	}
}