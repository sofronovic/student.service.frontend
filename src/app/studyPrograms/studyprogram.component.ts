import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { StudyProgram } from '../model/studyprogram.model';
import { StudyProgramService } from './studyprogram.service';

@Component({
  selector: 'studyprogram-list',
  templateUrl: './studyprograms.component.html',
  styleUrls: ['./studyprogram.component.css']
})
export class StudyProgramComponent implements OnInit {

  studyPrograms: StudyProgram[];

  subscription: Subscription;

  constructor(private studyProgramService: StudyProgramService, private router: Router) {
    this.subscription = studyProgramService.RegenerateData$.subscribe(() =>
      this.getStudyPrograms()
    );
  }

  ngOnInit(): void {
    this.getStudyPrograms();
  }

  getStudyPrograms() {
    this.studyProgramService.getStudyPrograms().then(studyPrograms =>
      this.studyPrograms = studyPrograms);
  }

  gotoAdd(): void {
    this.router.navigate(['/addStudyProgram']);
  }

  gotoEdit(studyProgram: StudyProgram): void {
    this.router.navigate(['/editStudyProgram', studyProgram.id]);
  }

  deleteStudyProgram(studyPogramId: number): void {
    this.studyProgramService.deleteStudyProgram(studyPogramId).then(
      () => this.getStudyPrograms()
    );
  }
}
