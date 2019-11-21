import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { CategoryListComponent } from './category-list/category-list.component';
import { Category } from 'src/app/states/models/category.model';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, private afAuth: AngularFireAuth, public dialog: MatDialog, public challengeService: ChallengeService) { }

  createMode = true;
  ownChallenge = [];

  category: Category = {
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    uid: "",
    challengeList: []
  };

  ngOnInit() {

  }

  openDialog(): void {
    this.categoriesService.getOwn(this.afAuth.auth.currentUser.uid);
    const dialogRef = this.dialog.open(CategoryListComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result["uid"] = this.afAuth.auth.currentUser.uid) {
          this.createMode = false;
          this.category = <Category>result;
          this.ownChallenge = this.challengeService.getOwn(this.afAuth.auth.currentUser.uid);
        }
      }
      else {
        this.createMode = true;
      }
    });
  }

  onClickSelect() {
    console.log(this.categoriesService.categories);
  }

}
