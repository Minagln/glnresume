import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationsComponent } from './educations/educations.component';
import { WorksComponent } from './works/works.component';
import { WorkSampleComponent } from './work-sample/work-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationsComponent,
    WorksComponent,
    WorkSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
