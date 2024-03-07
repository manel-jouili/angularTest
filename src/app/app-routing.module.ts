import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStageComponent } from './add-stage/add-stage.component';
import { StageComponent } from './stage/stage.component';

const routes: Routes = [
  {path:'addStage', component:AddStageComponent},
  {path:'stage', component:StageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
