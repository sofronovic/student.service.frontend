
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { StudentService } from '../students/student.service';
import { StudyProgramService } from "../studyPrograms/studyprogram.service";

import { Student } from '../model/student.model';
import { StudyProgram } from '../model/studyProgram.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail-component.html',
  styleUrls: ['./student-detail-component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  studyPrograms: StudyProgram[];
  mode: string;

  constructor(private studentService: StudentService, private studyProgramService: StudyProgramService, private route: ActivatedRoute, private location: Location) {
     this.student = new Student ({
          username: '',
          firstname: '',
          lastname: '',
          birthday: '',
          email: '',
          indeks: '',
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
          this.studentService.getStudent(+params['id']))
        .subscribe(student => {
          this.student = student;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.studentService.addStudent(this.student)
      .then(student => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.studentService.editStudent(this.student)
      .then(student => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
