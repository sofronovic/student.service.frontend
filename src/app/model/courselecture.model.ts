import { Teacher } from "./teacher.model";
import { SubjectModel } from "./subject.model";

export class CourseLecture implements ICourseLecture {
	public id: number;
	public teacher: Teacher;
	public subject: SubjectModel;

	public constructor(courseLecture: ICourseLecture)
	{

		this.id = courseLecture.id;
		this.teacher = courseLecture.teacher;
		this.subject = courseLecture.subject;
	}
}


interface ICourseLecture{
	id? : number;
	teacher: Teacher;
	subject: SubjectModel;
}
