import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationsComponent } from './educations/educations.component';
import { WorkSampleComponent } from './work-sample/work-sample.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'me', component: AboutMeComponent },
  { path: 'edu', component: EducationsComponent },
  { path: 'sample', component: WorkSampleComponent },
  { path: 'work', component: WorksComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
