import { Student } from "./student.model";

export class StudyProgram implements StudyProgramInterface {
	public id: number;
	public name: string;
	public duration: number;
	public courseType: string;
	public studentList: Array<Student>;

	public constructor(studyProgramCfg: StudyProgramInterface) {
		this.id = studyProgramCfg.id;
		this.name = studyProgramCfg.name;
		this.duration = studyProgramCfg.duration;
		this.courseType = studyProgramCfg.courseType;
	}
}

interface StudyProgramInterface {
	id?: number;
	name: string;
	duration: number;
	courseType: string;
}
