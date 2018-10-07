import { CourseAttending } from "./courseattending.model.ts";
import { CourseLecture } from "./courselecture.model.ts";

export class SubjectModel {
	public id: number;
	public label: string;
	public name: string;
	public ects: string;
	public courseAttending: CourseAttending;
	public courseLecture: CourseLecture;
		
	constructor()
	{	
}