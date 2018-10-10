import { Student } from "./student.model";
import { Teacher } from "./teacher.model";
import { SubjectModel } from "./subject.model";

export class Exam implements IExam {
	public id: number;
	public type: string;
	public student: Student;
	public teacher: Teacher;
	public subject: SubjectModel;
	public score: number;
	public points: number;

	public constructor(exam:IExam) {
		this.id = exam.id;
		this.type = exam.type;
		this.student = exam.student;
		this.teacher = exam.teacher;
		this.subject = exam.subject;
		this.score = exam.score;
		this.points = exam.points;
	}
}

interface IExam {
	id?: number;
	type: string;
	student: Student;
	teacher: Teacher;
	subject: SubjectModel;
	score: number;
	points: number;
}
