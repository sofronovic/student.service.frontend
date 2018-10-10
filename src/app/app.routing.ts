import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AccountsComponent } from "./account/accounts.components";
import { AccountDetailComponent } from "./account-detail/account-detail-component"
import { SubjectDetailComponent } from "./subjects-detail/subjects-detail.component";
import { StudyProgramDetailComponent } from "./study-programs-detail/study-program-detail-component";
import { StudyProgramComponent } from "./studyPrograms/studyprogram.component";
import { PaymentsComponent } from "./payments/payments.component";
import { PaymentDetailComponent } from "./payments-detail/payment-detail.component";
import { StudentDetailComponent } from "./students-detail/student-detail-component";
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents-detail/documents-detail.component';
import { CourseAttendingComponent } from "./course-attending/course-attending.component";
import { TeacherTypeComponent} from './teacherType/teacherType.component';
import { TeacherTypeDetailComponent} from './teacherType-detail/teacherType-detail.component';
import { TeacherComponent } from './teachers/teachers.component';
import { TeacherDetailComponent} from './teachers-detail/teacher-detail.component';
import { CourseLectureComponent} from './courselecture/courselecture.component';
import { CourseLectureDetailComponent} from './courselecture-detail/course-lecture-detail.component';
import { ExamsComponent } from "./exams/exam.component";
import { ExamDetailComponent} from "./exams-detail/exam-detail.component";
import { CourseAttendingDetailComponent} from './course-attending-detail/course-attending-detail.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'addSubject', component: SubjectDetailComponent },
  { path: 'editSubjects/:id', component: SubjectDetailComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'addAccount', component: AccountDetailComponent},
  { path: 'editAccount/:id', component: AccountDetailComponent},


  { path: 'studyPrograms', component: StudyProgramComponent},
  { path: 'addStudyProgram', component: StudyProgramDetailComponent},
  { path: 'editStudyProgram/:id', component: StudyProgramDetailComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'addPayment', component: PaymentDetailComponent },
  { path: 'editPayment/:id', component: PaymentDetailComponent },
  { path: 'addStudent', component: StudentDetailComponent},
  { path: 'editStudent/:id', component: StudentDetailComponent},
  { path: 'documents' , component: DocumentsComponent},
{ path: 'addDocument', component: DocumentDetailComponent},
{ path: 'editDocument/:id', component: DocumentDetailComponent},
  { path: 'courseAttending', component: CourseAttendingComponent},
  { path: 'addCourseAttending', component: CourseAttendingDetailComponent},
    { path: 'editCourseAttending/:id', component: CourseAttendingDetailComponent},
  { path: 'teacherType', component: TeacherTypeComponent},
  { path: 'addTeacherType', component: TeacherTypeDetailComponent},
  { path: 'editTeacherType/:id', component: TeacherTypeDetailComponent},
  { path: 'teachers', component: TeacherComponent},
  { path: 'addTeacher',  component: TeacherDetailComponent},
  { path: 'editTeacher/:id' , component: TeacherDetailComponent},
  { path: 'courseLecture' , component: CourseLectureComponent},
  { path: 'addCourseLecture' ,component: CourseLectureDetailComponent},
  { path: 'editCourseLecture/:id' ,component: CourseLectureDetailComponent},
  { path: 'exams', component: ExamsComponent},
  { path: 'addExam', component: ExamDetailComponent},
  { path: 'editExam/:id', component: ExamDetailComponent},
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
