import { Teacher } from "./teacher.model";

export class TeacherType implements TeacherTypeInterface{
	public id: number;
	public name: string;
	public teacherList: Array<Teacher>;

	public constructor(teacherTypeCfg: TeacherTypeInterface) {
		this.id = teacherTypeCfg.id;
		this.name = teacherTypeCfg.name;
	}
}

interface TeacherTypeInterface{
	id?: number;
	name: string;

}
