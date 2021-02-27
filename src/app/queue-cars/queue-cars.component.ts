import {Component, OnInit, OnDestroy} from '@angular/core';
import {MaintenanceService} from '../services/maintenance.service';
import {ModalCarComponent} from '../modal-car/modal-car.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarModel} from '../models/car.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-queue-cars',
  templateUrl: './queue-cars.component.html',
  styleUrls: ['./queue-cars.component.css']
})
export class QueueCarsComponent implements OnInit, OnDestroy {
  cars: CarModel[];
  destroyed$: Subject<void> = new Subject<void>();

  constructor(private maintenanceService: MaintenanceService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.cars = this.maintenanceService.getUncompletedCars();
  }

  completedCar(car: CarModel): void {
    this.maintenanceService.completedCar(car);
    this.cars = this.maintenanceService.getUncompletedCars();
  }

  open(): void {
    const modalRef = this.modalService.open(ModalCarComponent);
    modalRef.dismissed.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.cars = this.maintenanceService.getUncompletedCars();
    });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
