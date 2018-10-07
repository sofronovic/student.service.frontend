import { Student } from "./student.model";

export class Payment {
	public id: number;
	public description: string;
	public date: string;
	public amount: string;
	public student: Student;

	public constructor() {

	}
}