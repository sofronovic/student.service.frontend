import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Account } from '../model/account.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
	private accountsUrl = 'api/accounts';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getAccounts(): Promise<Account[]> {
    	return this.http.get(this.accountsUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as Account[])
    		.catch(this.handleError);
    }

    getAccount(id: number): Promise<Account> {
        const url = `${this.accountsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Account)
            .catch(this.handleError);
    }

    addAccount(account: Account): Promise<Account> {
    	return this.http
    		.post(this.accountsUrl, JSON.stringify(account), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as Account)
    		.catch(this.handleError);
    }

    editAccount(account: Account): Promise<Account> {
    	return this.http
    	.put(this.accountsUrl, JSON.stringify(account), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as Account)
    	.catch(this.handleError);
    }

    deleteAccount(accountId: number): Promise<{}> {
    	const url = `${this.accountsUrl}/${accountId}`;
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