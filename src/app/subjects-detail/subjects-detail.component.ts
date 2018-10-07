
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../subjects/subject.service';
import { SubjectModel } from '../model/subject.model';
import { StudyProgram } from '../model/studyProgram.model';
import { Student } from '../model/student.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subjects-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  subject: SubjectModel;

  studyPrograms: StudyProgram[];

  mode: string;    

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private location: Location) {
    this.subject = new SubjectModel({ // if we add a new subject, create an empty student
        name: '',
        label: '',
        ects: '',
        studyProgram: null
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT'; 
      // fetch subject if we edit the existing student
      this.route.params
        .switchMap((params: Params) => 
          this.subjectService.getSubject(+params['id'])) // convert to number
        .subscribe(subject => {
          this.subject = subject;
/*          this.subjectService.getStudentEnrollments(student.id).then(enrollments =>
            this.enrollments = enrollments);*/
          }
        );
    } 
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();    
  }

  private add(): void {
    this.subjectService.addSubject(this.subject)
      .then(subject => {
        this.subjectService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.subjectService.editSubject(this.subject)
      .then(subject => {
        this.subjectService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
