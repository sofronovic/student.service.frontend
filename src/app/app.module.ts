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
import { DocumentsComponent } from './documents/documents.component';
import { TeacherTypeComponent} from './teacherType/teacherType.component';
import { TeacherTypeDetailComponent} from './teacherType-detail/teacherType-detail.component';
import { TeacherComponent } from  './teachers/teachers.component';
import { TeacherDetailComponent} from './teachers-detail/teacher-detail.component';

import {TeacherService} from './teachers/teachers.service';
import { TeacherTypeService} from './teacherType/teacherType.service';
import { StudentService } from './students/student.service';
import { StudyProgramService } from './studyPrograms/studyprogram.service';
import { SubjectDetailComponent } from './subjects-detail/subjects-detail.component';
import { SubjectService } from './subjects/subject.service';
import { AccountService} from './account/account.service';
import { StudyProgramComponent } from "./studyPrograms/studyprogram.component";
import { StudyProgramDetailComponent } from "./study-programs-detail/study-program-detail-component";
import { PaymentsComponent } from "./payments/payments.component";
import { PaymentService } from "./payments/payment.service";
import { PaymentDetailComponent } from "./payments-detail/payment-detail.component";
import { StudentDetailComponent } from "./students-detail/student-detail-component";
import { DocumentService } from './documents/document.service';
import { DocumentDetailComponent } from './documents-detail/documents-detail.component';
import { CourseAttendingComponent } from "./course-attending/course-attending.component";
import { CourseAttendingService } from "./course-attending/course-attending.service";
import { ExamService } from "./exams/exam.service";
import { ExamsComponent } from "./exams/exam.component";
import { ExamDetailComponent } from "./exams-detail/exam-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    AccountsComponent,
    SubjectDetailComponent,
    StudyProgramComponent,
    StudyProgramDetailComponent,
    PaymentsComponent,
    PaymentDetailComponent,
    StudentDetailComponent,
    DocumentsComponent,
    DocumentDetailComponent,
    CourseAttendingComponent,
    TeacherTypeComponent,
    TeacherTypeDetailComponent,
    TeacherComponent,
    TeacherDetailComponent,
    ExamsComponent,
    ExamDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],


  providers: [StudentService, SubjectService, AccountService, StudyProgramService, PaymentService,
    CourseAttendingService, DocumentService, TeacherTypeService, TeacherService, ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
