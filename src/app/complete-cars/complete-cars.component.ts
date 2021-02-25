import {Component, OnInit} from '@angular/core';
import {MaintenanceService} from '../services/maintenance.service';
import {CarModel} from '../models/car.model';

@Component({
  selector: 'app-complete-cars',
  templateUrl: './complete-cars.component.html',
  styleUrls: ['./complete-cars.component.css']
})
export class CompleteCarsComponent implements OnInit {

  allCompletedCars: CarModel[];

  constructor(private maintenanceService: MaintenanceService) {
  }

  ngOnInit(): void {
    this.allCompletedCars = this.maintenanceService.getCompletedCars();
  }

}
