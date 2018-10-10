import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { SubjectModel } from '../model/subject.model';
import { Student } from "../model/student.model";
import { Teacher } from "../model/teacher.model";
import { Exam } from "../model/exam.model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExamService {
	private examsUrl = 'api/exams';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getExams(): Promise<Exam[]> {
    	return this.http.get(this.examsUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as Exam[])
    		.catch(this.handleError);
    }

    getExam(id: number): Promise<Exam> {
        const url = `${this.examsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Exam)
            .catch(this.handleError);
    }

    addExam(exam: Exam): Promise<Exam> {
    	return this.http
    		.post(this.examsUrl, JSON.stringify(exam), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as Exam)
    		.catch(this.handleError);
    }

    editExam(exam: Exam): Promise<Exam> {
    	return this.http
    	.put(this.examsUrl, JSON.stringify(exam), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as Exam)
    	.catch(this.handleError);
    }

    deleteExam(examId: number): Promise<{}> {
    	const url = `${this.examsUrl}/${examId}`;
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
