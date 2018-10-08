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
import { StudyProgramService } from './studyPrograms/studyprogram.service';
import { SubjectDetailComponent } from './subjects-detail/subjects-detail.component';
import { SubjectService } from './subjects/subject.service';
import { AccountService} from './account/account.service';
import { StudyProgramComponent } from "./studyPrograms/studyprogram.component";
import { StudyProgramDetailComponent } from "./study-programs-detail/study-program-detail-component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    AccountsComponent,
    SubjectDetailComponent,
    StudyProgramComponent,
    StudyProgramDetailComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StudentService, SubjectService, AccountService, StudyProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
