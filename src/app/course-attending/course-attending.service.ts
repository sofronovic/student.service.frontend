import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { SubjectModel } from '../model/subject.model';
import { CourseAttending } from '../model/courseattending.model';
import { Student } from '../model/student.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseAttendingService {
	private courseAttUrl = 'api/courseAttendings';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getCourseAttendings(): Promise<CourseAttending[]> {
    	return this.http.get(this.courseAttUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as CourseAttending[])
    		.catch(this.handleError);
    }

    getCourseAttending(id: number): Promise<CourseAttending> {
        const url = `${this.courseAttUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as CourseAttending)
            .catch(this.handleError);
    }

    addCourseAttending(courseAttending: CourseAttending): Promise<CourseAttending> {
    	return this.http
    		.post(this.courseAttUrl, JSON.stringify(courseAttending), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as CourseAttending)
    		.catch(this.handleError);
    }

    editCourseAttending(courseAttending: CourseAttending): Promise<CourseAttending> {
    	return this.http
    	.put(this.courseAttUrl, JSON.stringify(courseAttending), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as CourseAttending)
    	.catch(this.handleError);
    }

    deleteCourseAttending(courseAttendingId: number): Promise<{}> {
    	const url = `${this.courseAttUrl}/${courseAttendingId}`;
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
