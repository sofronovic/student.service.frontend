import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TeacherService } from '../teachers/teachers.service';
import { TeacherTypeService } from "../teacherType/teacherType.service";

import { Teacher } from '../model/teacher.model';
import {TeacherType} from '../model/teachertype.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;
  teacherTypes : TeacherType[];

  mode: string;

  constructor(private teacherService: TeacherService, private teacherTypeService : TeacherTypeService, private route: ActivatedRoute, private location: Location) {
     this.teacher = new Teacher ({
          username: '',
          firstname: '',
          lastname: '',
          birthday: '',
          email: '',
          teacherType: new TeacherType({
            name: ''
        })
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.teacherTypeService.getTeacherTypes().then(teacherTypes => this.teacherTypes = teacherTypes);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.teacherService.getTeacher(+params['id']))
        .subscribe(teacher => {
          this.teacher = teacher;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.teacherService.addTeacher(this.teacher)
      .then(teacher => {
        this.teacherService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.teacherService.editTeacher(this.teacher)
      .then(teacher => {
        this.teacherService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
