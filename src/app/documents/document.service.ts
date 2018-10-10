import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Document } from '../model/document.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocumentService {
	private documentsUrl = 'api/documents';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getDocuments(): Promise<Document[]> {
    	return this.http.get(this.documentsUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as Document[])
    		.catch(this.handleError);
    }

    getDocument(id: number): Promise<Document> {
        const url = `${this.documentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Document)
            .catch(this.handleError);
    }

    addDocument(document: Document): Promise<Document> {
    	return this.http
    		.post(this.documentsUrl, JSON.stringify(document), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as Document)
    		.catch(this.handleError);
    }

    editDocument(document: Document): Promise<Document> {
    	return this.http
    	.put(this.documentsUrl, JSON.stringify(document), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as Document)
    	.catch(this.handleError);
    }

    deleteDocument(documentId: number): Promise<{}> {
    	const url = `${this.documentsUrl}/${documentId}`;
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
