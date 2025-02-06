import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'app-recipe-edit',
  templateUrl:'recipe-edit.component.html',
  styleUrls:['recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{

  public recipeId !: number;

  public editMode : boolean = false;

  constructor(private route : ActivatedRoute) {}

  public ngOnInit() {

    this.route.params.subscribe({
      next:(result)=>{
        this.recipeId = +result['id'];
        this.editMode = result['id'] !== null;
        console.log(this.editMode);
      },
      error:(err)=>{
        console.error('Unable to get current route info');
      },
      complete:()=>{

      }
    });

  }


}
