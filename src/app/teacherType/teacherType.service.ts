import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { TeacherType } from '../model/teachertype.model';



import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherTypeService {
	private teacherTypeUrl = 'api/teacherTypes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getTeacherTypes(): Promise<TeacherType[]> {
    	return this.http.get(this.teacherTypeUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as TeacherType[])
    		.catch(this.handleError);
    }

    getTeacherType(id: number): Promise<TeacherType> {
        const url = `${this.teacherTypeUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as TeacherType)
            .catch(this.handleError);
    }

    addTeacherType(teacherType: TeacherType): Promise<TeacherType> {
    	return this.http
    		.post(this.teacherTypeUrl, JSON.stringify(teacherType), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as TeacherType)
    		.catch(this.handleError);
    }

    editTeacherType(teacherType: TeacherType): Promise<TeacherType> {
    	return this.http
    	.put(this.teacherTypeUrl, JSON.stringify(teacherType), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as TeacherType)
    	.catch(this.handleError);
    }

    deleteTeacherType(teacherTypeId: number): Promise<{}> {
    	const url = `${this.teacherTypeUrl}/${teacherTypeId}`;
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
