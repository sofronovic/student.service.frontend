import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { SubjectModel } from '../model/subject.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubjectService {
	private subjectsUrl = 'api/subjects';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getSubjects(): Promise<SubjectModel[]> {
    	return this.http.get(this.subjectsUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as SubjectModel[])
    		.catch(this.handleError);
    }

    getSubject(id: number): Promise<SubjectModel> {
        const url = `${this.subjectsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as SubjectModel)
            .catch(this.handleError);
    }

    addSubject(subject: SubjectModel): Promise<SubjectModel> {
    	return this.http
    		.post(this.subjectsUrl, JSON.stringify(subject), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as SubjectModel)
    		.catch(this.handleError);
    }

    editSubject(subject: SubjectModel): Promise<SubjectModel> {
    	return this.http
    	.put(this.subjectsUrl, JSON.stringify(subject), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as SubjectModel)
    	.catch(this.handleError);
    }

    deleteSubject(subjectId: number): Promise<{}> {
    	const url = `${this.subjectsUrl}/${subjectId}`;
    	return this.http
    	.delete(url)
    	.toPromise()
    	.catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
    	console.error("Error... ", error);
    	return Promise.reject(error.message || error);
    }
}