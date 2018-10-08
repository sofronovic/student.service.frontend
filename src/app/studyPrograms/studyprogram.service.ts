import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { StudyProgram } from '../model/studyprogram.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudyProgramService {
    private studyProgramsUrl = 'api/studyPrograms';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getStudyPrograms(): Promise<StudyProgram[]> {
        return this.http.get(this.studyProgramsUrl)
            .toPromise()
            .then(response =>
                response.json() as StudyProgram[])
            .catch(this.handleError);
    }

    getStudyProgram(id: number): Promise<StudyProgram> {
        const url = `${this.studyProgramsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as StudyProgram)
            .catch(this.handleError);
    }

    addStudyProgram(studyProgram: StudyProgram): Promise<StudyProgram> {
        return this.http
            .post(this.studyProgramsUrl, JSON.stringify(studyProgram), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as StudyProgram)
            .catch(this.handleError);
    }

    editStudyProgram(studyProgram: StudyProgram): Promise<StudyProgram> {
        return this.http
            .put(this.studyProgramsUrl, JSON.stringify(studyProgram), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as StudyProgram)
            .catch(this.handleError);
    }

    deleteStudyProgram(studyProgramId: number): Promise<{}> {
        const url = `${this.studyProgramsUrl}/${studyProgramId}`;
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
