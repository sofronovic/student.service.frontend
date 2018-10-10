
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../subjects/subject.service';
import { StudentService } from "../students/student.service";
import { TeacherService } from '../teachers/teachers.service';
import { ExamService } from '../exams/exam.service';

import { SubjectModel } from '../model/subject.model';
import { Student } from '../model/student.model';
import { Exam } from '../model/exam.model';
import { Teacher } from '../model/teacher.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-exams-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {
  exam: Exam;
  students: Student[];
  subjects: SubjectModel[];
  teachers: Teacher[];
  mode: string;

  constructor(private subjectService: SubjectService, private examService: ExamService, private studentService: StudentService,
    private teacherService: TeacherService, private route: ActivatedRoute, private location: Location) {
    this.exam = new Exam({
        type: '',
        student: new Student({
        username: '',
        firstname: '',
        lastname: '',
        birthday: '',
        email: '',
        indeks: '',
        studyProgram: null
      }),
        teacher: new Teacher({
          username: '',
          firstname: '',
          lastname: '',
          birthday: '',
          email: '',
          teacherType: null
        }),
        subject: new SubjectModel({
          label: '',
          name: '',
          ects: '',
          studyProgram: null
        }),
        score: 0,
        points: 0
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.studentService.getStudents().then(students => this.students = students);
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    this.subjectService.getSubjects().then(subjects => this.subjects = subjects);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.examService.getExam(+params['id'])) // convert to number
        .subscribe(exam => {
          this.exam = exam;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.examService.addExam(this.exam)
      .then(exam => {
        this.examService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.examService.editExam(this.exam)
      .then(exam => {
        this.examService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
