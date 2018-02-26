import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "../main-page/main-page.component";
import { SearchPageComponent } from "../search-page/search-page.component";

const routes: Routes = [
  { path: "search", component: SearchPageComponent },
  // { path: "datasets/:id", component: DatasetDetailComponent },
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full"
  },
  {
    path: "main",
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgRoutingModule {}
