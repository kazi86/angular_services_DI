import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";


const routes : Routes = [
  {path:'',redirectTo:'/recipes-list',pathMatch:'full'},
  {path:'recipes-list',component:RecipesComponent, children:[
    {path:'',component:RecipeStartComponent},
    {path:':id',component:RecipeDetailComponent},
    ]},
  {path:'shopping-list',component:ShoppingListComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouteModule{

}
