import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'http://sman3rks.sch.id/media_library/posts/post-image-1594363147962.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
