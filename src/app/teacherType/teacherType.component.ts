import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { TeacherType } from '../model/teachertype.model';
import { TeacherTypeService } from './teacherType.service';

@Component({
  selector: 'teacherType-list',
  templateUrl: './teacherType.component.html',
  styleUrls: ['./teacherType.component.css']
})
export class TeacherTypeComponent implements OnInit {

  teacherTypes: TeacherType[];

  subscription: Subscription;

  constructor(private teacherTypeService: TeacherTypeService, private router: Router) {
    this.subscription = teacherTypeService.RegenerateData$.subscribe(() =>
      this.getTeacherTypes()
    );
  }

  ngOnInit(): void {
    this.getTeacherTypes();
  }

  getTeacherTypes() {
    this.teacherTypeService.getTeacherTypes().then(teacherTypes =>
      this.teacherTypes = teacherTypes);
  }

  gotoAdd(): void {
    this.router.navigate(['/addTeacherType']);
  }

  gotoEdit(teacherType: TeacherType): void {
    this.router.navigate(['/editTeacherType', teacherType.id]);
  }

  deleteTeacherType(teacherTypeId: number): void {
    this.teacherTypeService.deleteTeacherType(teacherTypeId).then(
      () => this.getTeacherTypes()
    );
  }
}
