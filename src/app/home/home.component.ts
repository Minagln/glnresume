import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  detailMode: 'work' | 'edu' | 'me' | 'sample' | undefined = undefined;

  changeStatus(status: 'work' | 'edu' | 'me' | 'sample') {
    this.detailMode = this.detailMode === status ? undefined : status;
    this.router.navigateByUrl(status);
  }
}
