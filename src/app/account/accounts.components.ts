import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Account } from '../model/account.model';
import { AccountService } from './account.service';

@Component({
  selector: 'account-list',
  templateUrl: './accounts.components.html',
  styleUrls: ['./account.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  subscription: Subscription;

  constructor(private accountService: AccountService, private router: Router) {
    this.subscription = accountService.RegenerateData$.subscribe(() =>
      this.getAccounts()
    );
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().then(accounts =>
      this.accounts = accounts);
  }

  gotoAdd(): void {
    this.router.navigate(['/addAccount']);
  }

  gotoEdit(account: Account): void {
    this.router.navigate(['/editAccount', account.id]);
  }

  deleteAccount(accountId: number): void {
    this.accountService.deleteAccount(accountId).then(
      () => this.getAccounts()
    );
  }
}
