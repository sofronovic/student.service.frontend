import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../subjects/subject.service';
import { TeacherService } from "../teachers/teachers.service";
import { CourseLectureService } from "../courselecture/courselecture.service";

import { CourseLecture } from '../model/courselecture.model';
import { SubjectModel } from '../model/subject.model';
import { Teacher } from '../model/teacher.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-courselecture-detail',
  templateUrl: './course-lecture-detail.component.html',
  styleUrls: ['./course-lecture-detail.component.css']
})
export class CourseLectureDetailComponent implements OnInit {
  courseLecture: CourseLecture;
  subjects: SubjectModel[];
  teachers: Teacher[];
  mode: string;

  constructor(private subjectService: SubjectService, private teacherService: TeacherService,
                private courseLectureService: CourseLectureService, private route: ActivatedRoute, private location: Location) {
    this.courseLecture = new CourseLecture({
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
        })
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    this.subjectService.getSubjects().then(subjects => this.subjects = subjects);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.courseLectureService.getCourseLecture(+params['id'])) // convert to number
        .subscribe(courseLecture => {
          this.courseLecture = courseLecture;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.courseLectureService.addCourseLecture(this.courseLecture)
      .then(courseLecture => {
        this.courseLectureService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.courseLectureService.editCourseLecture(this.courseLecture)
      .then(courseLecture => {
        this.courseLectureService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
