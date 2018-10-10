import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Document } from '../model/document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'documents-list',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: Document[];

  subscription: Subscription;

  constructor(private documentService: DocumentService, private router: Router) {
    this.subscription = documentService.RegenerateData$.subscribe(() =>
      this.getDocuments()
    );
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().then(documents =>
      this.documents = documents);
  }

  gotoAdd(): void {
    this.router.navigate(['/addDocument']);
  }

  gotoEdit(document: Document): void {
    this.router.navigate(['/editDocument', document.id]);
  }

  deleteDocument(documentId: number): void {
    this.documentService.deleteDocument(documentId).then(
      () => this.getDocuments()
    );
  }
}
