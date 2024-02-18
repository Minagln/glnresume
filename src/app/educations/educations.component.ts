import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent {
  constructor(private Router: Router) {}

  goBack() {
    this.Router.navigateByUrl('/');
  }
}
