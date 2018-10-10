
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../subjects/subject.service';
import { StudyProgramService } from "../studyPrograms/studyprogram.service";

import { SubjectModel } from '../model/subject.model';
import { StudyProgram } from '../model/studyprogram.model';
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

  constructor(private subjectService: SubjectService, private studyProgramService: StudyProgramService, private route: ActivatedRoute, private location: Location) {
    this.subject = new SubjectModel({
        name: '',
        label: '',
        ects: '',
        studyProgram: new StudyProgram({
          name: '',
          duration: 0,
          courseType: ''
        })
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.studyProgramService.getStudyPrograms().then(studyPrograms => this.studyPrograms = studyPrograms);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.subjectService.getSubject(+params['id'])) // convert to number
        .subscribe(subject => {
          this.subject = subject;
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
