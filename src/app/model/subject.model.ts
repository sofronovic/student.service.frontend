import { CourseAttending } from "./courseattending.model";
import { StudyProgram } from "./studyprogram.model";
import { CourseLecture } from "./courselecture.model";

export class SubjectModel implements SubjectInterface {
	public id: number;
	public label: string;
	public name: string;
	public ects: string;
	public studyProgram: StudyProgram;
	public courseAttending: Array<CourseAttending>;
	public courseLecture: Array<CourseLecture>;

	constructor(subjectCfg:SubjectInterface) {
		this.id = subjectCfg.id;
		this.label = subjectCfg.label;
		this.name = subjectCfg.name;
		this.ects = subjectCfg.ects;
		this.studyProgram = subjectCfg.studyProgram;
/*		this.courseAttending = subjectCfg.courseAttending;
		this.courseLecture = subjectCfg.courseLecture;
*/
	}
}

interface SubjectInterface {
	id?: number;
	label: string;
	name: string;
	ects: string;
	studyProgram: StudyProgram;
/*	courseAttending: Array<CourseAttending>;
	courseLecture: Array<CourseLecture>;*/
}
