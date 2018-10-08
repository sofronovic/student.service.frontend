import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent} from './subjects/subjects.component';
import { AccountsComponent} from './account/accounts.components';

import { StudentService } from './students/student.service';
import { SubjectDetailComponent } from './subjects-detail/subjects-detail.component';
import { SubjectService } from './subjects/subject.service';
import { AccountService} from './account/account.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    AccountsComponent,
    SubjectDetailComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StudentService, SubjectService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
