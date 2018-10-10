import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Teacher } from '../model/teacher.model';
import { TeacherService } from './teachers.service';

@Component({
  selector: 'teacher-list',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[];

  subscription: Subscription;

  constructor(private teacherService: TeacherService, private router: Router) {
    this.subscription = teacherService.RegenerateData$.subscribe(() =>
      this.getTeachers()
    );
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherService.getTeachers().then(teachers =>
      this.teachers = teachers);
  }

  gotoAdd(): void {
    this.router.navigate(['/addTeacher']);
  }

  gotoEdit(teacher: Teacher): void {
    this.router.navigate(['/editTeacher', teacher.id]);
  }

  deleteTeacher(teacherId: number): void {
    this.teacherService.deleteTeacher(teacherId).then(
      () => this.getTeachers()
    );
  }
}
