import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GitService } from './service/git.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { GitDirective } from './git.directive';
import { GitPipe } from './git.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    GitDirective,
    GitPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
