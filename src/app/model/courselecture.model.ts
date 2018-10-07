import { Teacher } from "./teacher.model";
import { SubjectModel } from "./subject.model";

export class CourseLecture {
	public id: number;
	public teacher: Teacher;
	public subject: SubjectModel;

	public constructor() {

	}
}