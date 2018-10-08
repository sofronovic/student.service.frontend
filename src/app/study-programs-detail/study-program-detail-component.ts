import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { StudyProgramService } from "../studyPrograms/studyprogram.service";
import { StudyProgram } from '../model/studyProgram.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-study-program-detail',
  templateUrl: './study-program-detail-component.html',
  styleUrls: ['./study-program-detail-compontent.css']
})
export class StudyProgramDetailComponent implements OnInit {

  studyProgram: StudyProgram;

  mode: string;

  constructor(private studyProgramService: StudyProgramService, private route: ActivatedRoute, private location: Location) {
    this.studyProgram = new StudyProgram({
        name: '',
        duration: 0,
        courseType: '',
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.studyProgramService.getStudyProgram(+params['id'])) // convert to number
        .subscribe(studyProgram => {
          this.studyProgram = studyProgram;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.studyProgramService.addStudyProgram(this.studyProgram)
      .then(studyProgram => {
        this.studyProgramService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.studyProgramService.editStudyProgram(this.studyProgram)
      .then(studyProgram => {
        this.studyProgramService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}