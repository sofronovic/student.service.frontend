import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { CourseLecture } from '../model/courselecture.model';
import { CourseLectureService } from './courselecture.service';

@Component({
  selector: 'courselecture-list',
  templateUrl: './courselecture.component.html',
  styleUrls: ['./courselecture.component.css']
})
export class CourseLectureComponent implements OnInit {

  courseLectures: CourseLecture[];

  subscription: Subscription;

  constructor(private courseLectureService: CourseLectureService, private router: Router) {
    this.subscription = courseLectureService.RegenerateData$.subscribe(() =>
      this.getCourseLectures()
    );
  }

  ngOnInit(): void {
    this.getCourseLectures();
  }

  getCourseLectures() {
    this.courseLectureService.getCourseLectures().then(courseLectures =>
      this.courseLectures = courseLectures);
  }

  gotoAdd(): void {
    this.router.navigate(['/addCourseLecture']);
  }

  gotoEdit(courseLecture: CourseLecture): void {
    this.router.navigate(['/editCourseLecture', courseLecture.id]);
  }

  deleteCourseLecture(courseLectureId: number): void {
    this.courseLectureService.deleteCourseLecture(courseLectureId).then(
      () => this.getCourseLectures()
    );
  }
}
