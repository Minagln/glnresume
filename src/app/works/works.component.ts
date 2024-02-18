import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  constructor(private Router: Router) {}

  goBack() {
    this.Router.navigateByUrl('/');
  }
}
