
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { TeacherTypeService } from "../teacherType/teacherType.service";

import { TeacherType } from '../model/TeacherType.model';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-teacherType-detail',
  templateUrl: './teacherType-detail.component.html',
  styleUrls: ['./teacherType-detail.component.css']
})
export class TeacherTypeDetailComponent implements OnInit {

  teacherType : TeacherType;

  mode: string;

  constructor(private teacherTypeService: TeacherTypeService,
                private route: ActivatedRoute, private location: Location) {
    this.teacherType = new TeacherType({
          name: ''
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.teacherTypeService.getTeacherType(+params['id'])) // convert to number
        .subscribe(teacherType => {
          this.teacherType = teacherType;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.teacherTypeService.addTeacherType(this.teacherType)
      .then(teacherType => {
        this.teacherTypeService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.teacherTypeService.editTeacherType(this.teacherType)
      .then(teacherType => {
        this.teacherTypeService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
