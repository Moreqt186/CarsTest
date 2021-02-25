import { Component } from '@angular/core';
import {ModalCarComponent} from './modal-car/modal-car.component';
import {MaintenanceService} from './services/maintenance.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }

  // open() {
  //   const modalRef = this.modalService.open(ModalCarComponent);
  // }
}
