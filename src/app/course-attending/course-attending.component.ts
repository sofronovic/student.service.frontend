import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { CourseAttending } from '../model/courseattending.model';
import { CourseAttendingService } from './course-attending.service';

@Component({
  selector: 'course-attending-list',
  templateUrl: './course-attending.component.html',
  styleUrls: ['./course-attending.component.css']
})
export class CourseAttendingComponent implements OnInit {

  courseAttendings: CourseAttending[];

  subscription: Subscription;

  constructor(private courseAttendingService: CourseAttendingService, private router: Router) {
    this.subscription = courseAttendingService.RegenerateData$.subscribe(() =>
      this.getCourseAttendings()
    );
  }

  ngOnInit(): void {
    this.getCourseAttendings();
  }

  getCourseAttendings() {
    this.courseAttendingService.getCourseAttendings().then(courseAttendings =>
      this.courseAttendings = courseAttendings);
  }

  gotoAdd(): void {
    this.router.navigate(['/addCourseAttending']);
  }

  gotoEdit(courseAttending: CourseAttending): void {
    this.router.navigate(['/editcourseAttendings', courseAttending.id]);
  }

  deleteSubject(courseAttendingId: number): void {
    this.courseAttendingService.deleteCourseAttending(courseAttendingId).then(
      () => this.getCourseAttendings()
    );
  }
}
