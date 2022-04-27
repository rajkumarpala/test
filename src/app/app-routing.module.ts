import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CchildComponent } from './cparent/cchild/cchild.component';
import { CparentComponent } from './cparent/cparent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"cparent",component:CparentComponent},
  {path:"cchild",component:CchildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
