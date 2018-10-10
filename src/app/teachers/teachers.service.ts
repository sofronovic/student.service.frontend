import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Teacher } from '../model/teacher.model';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherService {
	private teacherUrl = 'api/teachers';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getTeachers(): Promise<Teacher[]> {
    	return this.http.get(this.teacherUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as Teacher[])
    		.catch(this.handleError);
    }

    getTeacher(id: number): Promise<Teacher> {
        const url = `${this.teacherUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Teacher)
            .catch(this.handleError);
    }

    addTeacher(teacher: Teacher): Promise<Teacher> {
    	return this.http
    		.post(this.teacherUrl, JSON.stringify(teacher), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as Teacher)
    		.catch(this.handleError);
    }

    editTeacher(teacher: Teacher): Promise<Teacher> {
    	return this.http
    	.put(this.teacherUrl, JSON.stringify(teacher), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as Teacher)
    	.catch(this.handleError);
    }

    deleteTeacher(teacherId: number): Promise<{}> {
    	const url = `${this.teacherUrl}/${teacherId}`;
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
