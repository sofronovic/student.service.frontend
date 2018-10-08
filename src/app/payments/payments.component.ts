import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Payment } from '../model/payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'payments-list',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: Payment[];

  subscription: Subscription;

  constructor(private paymentService: PaymentService, private router: Router) {
    this.subscription = paymentService.RegenerateData$.subscribe(() =>
      this.getPayments()
    );
  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments().then(payments =>
      this.payments = payments);
  }

  gotoAdd(): void {
    this.router.navigate(['/addPayment']);
  }

  gotoEdit(payment: Payment): void {
    this.router.navigate(['/editPayments', payment.id]);
  }

  deletePayment(paymentId: number): void {
    this.paymentService.deletePayment(paymentId).then(
      () => this.getPayments()
    );
  }
}
