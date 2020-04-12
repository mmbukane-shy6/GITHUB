import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GitComponent } from '../app/git/git.component';
// import { GitService } from '../app/git.service';
import { FormsModule }from '@angular/forms';
import {RouterModule } from '@angular/router';
import { HttpClientModule }from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
// import { DateCountPipe } from './date-count.pipe';
// import { HighlightDirective } from './highlight.directive';
// import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // GitComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // GitService,
    RouterModule,
    FormsModule
  
   
  ],
  // providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }