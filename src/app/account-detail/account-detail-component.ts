import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AccountService } from "../account/account.service";
import { Account } from '../model/account.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail-component.html',
  
  //styleUrls: ['./account-detail\account-detail-component.css']
})
export class AccountDetailComponent implements OnInit {

  account: Account;

  mode: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private location: Location) {
    this.account = new Account({
        accountNumber: '',
        balance: '',
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.accountService.getAccount(+params['id'])) // convert to number
        .subscribe(account => {
          this.account = account;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.accountService.addAccount(this.account)
      .then(account => {
        this.accountService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.accountService.editAccount(this.account)
      .then(account => {
        this.accountService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
