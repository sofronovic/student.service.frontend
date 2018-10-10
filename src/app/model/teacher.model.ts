import { CourseLecture } from "./courselecture.model";
import { TeacherType } from "./teachertype.model";
import { User } from "./user.model";
import { IUser } from "./user.model";

export class Teacher extends User{
	public teacherType: TeacherType;
	public courseLectureList: CourseLecture;

	public constructor(teacher : IUser & ITeacher)
	{
			super(teacher);
			this.teacherType = teacher.teacherType;
	}
}

export interface ITeacher{

	teacherType: TeacherType;
}
