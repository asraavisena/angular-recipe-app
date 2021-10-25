import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'http://sman3rks.sch.id/media_library/posts/post-image-1594363147962.png'),
    new Recipe('Another Test Recipe', 'This is simply test', 'http://sman3rks.sch.id/media_library/posts/post-image-1594363147962.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) : void {
    this.recipeWasSelected.emit(recipe)
  }

}
