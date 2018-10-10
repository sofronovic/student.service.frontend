
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../subjects/subject.service';
import { StudentService } from "../students/student.service";
import { CourseAttendingService } from "../course-attending/course-attending.service";

import { CourseAttending } from '../model/courseattending.model';
import { SubjectModel } from '../model/subject.model';
import { Student } from '../model/student.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-courseattending-detail',
  templateUrl: './course-attending.component.html',
  styleUrls: ['./course-attending.component.css']
})
export class CourseAttendingComponent implements OnInit {
  courseAttending: CourseAttending;
  subjects: SubjectModel[];
  students: Student[];
  mode: string;

  constructor(private subjectService: SubjectService, private studentService: StudentService,
                private courseAttendingService: CourseAttendingService, private route: ActivatedRoute, private location: Location) {
    this.courseAttending = new CourseAttending({
        student: new Student({
          username: '',
          firstname: '',
          lastname: '',
          birthday: '',
          email: '',
          indeks: '',
          studyProgram: null
        }),
        subject: new SubjectModel({
          label: '',
          name: '',
          ects: '',
          studyProgram: null
        })
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.studentService.getStudents().then(students => this.students = students);
    this.subjectService.getSubjects().then(subjects => this.subjects = subjects);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.courseAttendingService.getCourseAttending(+params['id'])) // convert to number
        .subscribe(courseAttending => {
          this.courseAttending = courseAttending;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.courseAttendingService.addCourseAttending(this.courseAttending)
      .then(courseAttending => {
        this.courseAttendingService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.courseAttendingService.editCourseAttending(this.courseAttending)
      .then(courseAttending => {
        this.courseAttendingService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
