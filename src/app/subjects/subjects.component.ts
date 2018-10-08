import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { SubjectModel } from '../model/subject.model';
import { SubjectService } from './subject.service';

@Component({
  selector: 'subjects-list',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: SubjectModel[];

  subscription: Subscription;

  constructor(private subjectService: SubjectService, private router: Router) {
    this.subscription = subjectService.RegenerateData$.subscribe(() =>
      this.getSubjects()
    );
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getSubjects().then(subjects =>
      this.subjects = subjects);
  }

  gotoAdd(): void {
    this.router.navigate(['/addSubject']);
  }

  gotoEdit(subject: SubjectModel): void {
    this.router.navigate(['/editSubjects', subject.id]);
  }

  deleteSubject(subjectId: number): void {
    this.subjectService.deleteSubject(subjectId).then(
      () => this.getSubjects()
    );
  }
}
