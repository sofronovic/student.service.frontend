import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Payment } from '../model/payment.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentService {
	private paymentsUrl = 'api/payments';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

	private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

    getPayments(): Promise<Payment[]> {
    	return this.http.get(this.paymentsUrl)
    		.toPromise()
    		.then(response =>
    			response.json() as Payment[])
    		.catch(this.handleError);
    }

    getPayment(id: number): Promise<Payment> {
        const url = `${this.paymentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Payment)
            .catch(this.handleError);
    }

    addPayment(payment: Payment): Promise<Payment> {
    	return this.http
    		.post(this.paymentsUrl, JSON.stringify(payment), { headers: this.headers})
    		.toPromise()
    		.then(res => res.json() as Payment)
    		.catch(this.handleError);
    }

    editPayment(payment: Payment): Promise<Payment> {
    	return this.http
    	.put(this.paymentsUrl, JSON.stringify(payment), { headers: this.headers})
    	.toPromise()
    	.then(res => res.json() as Payment)
    	.catch(this.handleError);
    }

    deletePayment(paymentId: number): Promise<{}> {
    	const url = `${this.paymentsUrl}/${paymentId}`;
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
