import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-sample',
  templateUrl: './work-sample.component.html',
  styleUrls: ['./work-sample.component.scss'],
})
export class WorkSampleComponent {
  canShowModal: boolean = false;
  modalImage: string | undefined;

  constructor(private Router: Router) {}

  goBack() {
    this.Router.navigateByUrl('/');
  }
  
  changeImage(image?: string) {
    if (image) {
      this.canShowModal = true;
      this.modalImage = image;
    } else {
      this.canShowModal = false;
      this.modalImage = undefined;
    }
  }
}
