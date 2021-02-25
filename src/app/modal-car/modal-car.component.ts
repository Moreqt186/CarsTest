import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MaintenanceService} from '../services/maintenance.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.css']
})
export class ModalCarComponent implements OnInit {

  constructor(
    private maintenanceService: MaintenanceService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      brand: [null, Validators.required],
      year: ['1980', Validators.required]
    });
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }
    this.maintenanceService.addCar(this.form.get('brand').value, this.form.get('year').value);
    this.activeModal.dismiss('Save');
  }
}
