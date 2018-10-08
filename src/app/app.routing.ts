import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AccountsComponent } from "./account/accounts.components";
import { SubjectDetailComponent } from "./subjects-detail/subjects-detail.component";
import { StudyProgramDetailComponent } from "./study-programs-detail/study-program-detail-component";
import { StudyProgramComponent } from "./studyPrograms/studyprogram.component";

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'addSubject', component: SubjectDetailComponent },
  { path: 'editSubjects/:id', component: SubjectDetailComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'studyPrograms', component: StudyProgramComponent},
  { path: 'addStudyProgram', component: StudyProgramDetailComponent},
  { path: 'editStudyProgram/:id', component: StudyProgramDetailComponent},
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
