import { Component } from '@angular/core';

@Component({
  selector: 'app-work-sample',
  templateUrl: './work-sample.component.html',
  styleUrls: ['./work-sample.component.scss'],
})
export class WorkSampleComponent {
  canShowModal: boolean = false;
  modalImage: string | undefined;

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
