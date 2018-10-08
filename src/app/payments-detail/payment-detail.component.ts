
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PaymentService } from '../payments/payment.service';
import { StudentService } from '../students/student.service';

import { Payment } from '../model/payment.model';
import { Student } from '../model/student.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  payment: Payment;

  students: Student[];
  mode: string;

  constructor(private paymentService: PaymentService,
   private studentService: StudentService, private route: ActivatedRoute, private location: Location) {
    this.payment = new Payment();

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.studentService.getStudents().then(students => this.students = students);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.paymentService.getPayment(+params['id'])) // convert to number
        .subscribe(payment => {
          this.payment = payment;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.paymentService.addPayment(this.payment)
      .then(payment => {
        this.paymentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.paymentService.editPayment(this.payment)
      .then(payment => {
        this.paymentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
