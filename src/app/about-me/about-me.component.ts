import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  constructor(private Router: Router) {}

  goBack() {
    this.Router.navigateByUrl('/');
  }
}
