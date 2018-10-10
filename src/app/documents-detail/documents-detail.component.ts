import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DocumentService } from '../documents/document.service';
import { StudentService } from "../students/student.service";

import { Document } from '../model/document.model';
import { Student } from '../model/student.model';
import { StudyProgram } from '../model/studyprogram.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-document-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;

  students: Student[];

  mode: string;

  constructor(private documentService: DocumentService, private studentService: StudentService, private route: ActivatedRoute, private location: Location) {
    this.document = new Document({
        name: '',

        student: new Student({
          indeks: '',
          firstname: '',
          lastname: '',
          birthday: '',
          username: '',
          email: '',
          studyProgram: new StudyProgram({
            name: '',
            duration: 0,
            courseType: ''
          })
        })
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    this.studentService.getStudents().then(students => this.students = students);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.route.params
        .switchMap((params: Params) =>
          this.documentService.getDocument(+params['id'])) // convert to number
        .subscribe(document => {
          this.document = document;
          }
        );
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.documentService.addDocument(this.document)
      .then(document => {
        this.documentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.documentService.editDocument(this.document)
      .then(document => {
        this.documentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
