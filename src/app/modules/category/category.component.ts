import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, private afAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  onClickSelect() {
    this.categoriesService.getOwn(this.afAuth.auth.currentUser.uid);
    console.log(this.categoriesService.categories);
  }

}
