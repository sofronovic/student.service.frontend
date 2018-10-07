import { Student } from "./student.model.ts";

export class StudyProgram {
	public id: number;
	public name: string;
	public duration: number;
	public courseType: string;
	public studentList: Array<Student>;

	constructor() {

	}
}