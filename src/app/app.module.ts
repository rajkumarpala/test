import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { RouterModule } from '@angular/router';
import { CparentComponent } from './cparent/cparent.component';
import { CchildComponent } from './cparent/cchild/cchild.component';
import { BluebackgroundDirective } from './bluebackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CparentComponent,
    CchildComponent,
    BluebackgroundDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
