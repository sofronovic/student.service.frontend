import { CourseLecture } from "./courselecture.model.ts";
import { TeacherType } from "./teachertype.model.ts";

export class Teacher {
	public teacherType: TeacherType;
	public courseLectureList: CourseLecture;

	public constructor(){

	}
}