import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Exam } from '../model/exam.model';
import { ExamService } from './exam.service';

@Component({
  selector: 'exams-list',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamsComponent implements OnInit {

  exams: Exam[];

  subscription: Subscription;

  constructor(private examService: ExamService, private router: Router) {
    this.subscription = examService.RegenerateData$.subscribe(() =>
      this.getExams()
    );
  }

  ngOnInit(): void {
    this.getExams();
  }

  getExams() {
    this.examService.getExams().then(exams =>
      this.exams = exams);
  }

  gotoAdd(): void {
    this.router.navigate(['/addExam']);
  }

  gotoEdit(exam: Exam): void {
    this.router.navigate(['/editExam', exam.id]);
  }

  deleteExam(examId: number): void {
    this.examService.deleteExam(examId).then(
      () => this.getExams()
    );
  }
}
