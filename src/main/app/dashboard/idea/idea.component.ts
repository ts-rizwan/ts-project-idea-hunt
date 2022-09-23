import { Component, OnInit } from '@angular/core';
import { Idea } from '@app/models/idea.model';
import { IdeaService } from '../services/idea.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
})
export class IdeaComponent implements OnInit {
  ideas: Idea[] = [];
  showLoader: boolean = false;

  constructor(
    private ideaService: IdeaService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.showLoader = true;
    this.ideaService.getIdeas().subscribe(actionArray => {
      this.ideas = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          title: item.payload.doc.get('title'),
          description: item.payload.doc.get('description'),
          status: item.payload.doc.get('status'),
          upvotes: item.payload.doc.get('upvotes'),
          downvotes: item.payload.doc.get('downvotes'),
          sessionTime: item.payload.doc.get('sessionTime'),
          trainer: item.payload.doc.get('trainer'),
          sessionLink: item.payload.doc.get('sessionLink'),
          postedAt: item.payload.doc.get('postedAt'),
          postedBy: item.payload.doc.get('postedBy'),
        };
      });
      this.showLoader = false;
    });
  }
}
