import { Teacher } from "./teacher.model.ts";
import { Subject } from "./subject.model.ts";

export class CourseLecture {
	public id: number;
	public teacher: Teacher;
	public subject: Subject;

	public constructor() {

	}
}