import { Student } from "./student.model";
import { CourseAttending } from "./courseattending.model";

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