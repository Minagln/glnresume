import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  detailMode: 'work' | 'edu' | 'me' | undefined = undefined;

  changeStatus(status: 'work' | 'edu' | 'me' | undefined) {
    this.detailMode = this.detailMode === status ? undefined : status;
  }
}
