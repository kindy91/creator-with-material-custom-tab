import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTabComponent } from './custom-tab/custom-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SurveyCreatorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
