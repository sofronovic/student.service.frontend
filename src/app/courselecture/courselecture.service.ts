import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { SubjectModel } from '../model/subject.model';
import { CourseLecture } from '../model/courselecture.model';
import { Teacher } from '../model/teacher.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseLectureService {
	private courseLectureUrl = 'api/courseLectures';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getCourseLectures(): Promise<CourseLecture[]> {
    	return this.http.get(this.courseLectureUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as CourseLecture[])
    		.catch(this.handleError);
    }

    getCourseLecture(id: number): Promise<CourseLecture> {
        const url = `${this.courseLectureUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as CourseLecture)
            .catch(this.handleError);
    }

    addCourseLecture(courseLecture: CourseLecture): Promise<CourseLecture> {
    	return this.http
    		.post(this.courseLectureUrl, JSON.stringify(courseLecture), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as CourseLecture)
    		.catch(this.handleError);
    }

    editCourseLecture(courseLecture: CourseLecture): Promise<CourseLecture> {
    	return this.http
    	.put(this.courseLectureUrl, JSON.stringify(courseLecture), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as CourseLecture)
    	.catch(this.handleError);
    }

    deleteCourseLecture(courseLectureId: number): Promise<{}> {
    	const url = `${this.courseLectureUrl}/${courseLectureId}`;
    	return this.http
    	.delete(url)
    	.toPromise()
    	.catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
    	console.error("Error... ", error);
			    	console.error("Error... ", error.message);
    	return Promise.reject(error.message || error);
    }
}
