import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  allCars: CarModel[] = [
    {carBrand: 'Lada', carYear: '1993', completed: false, id: 1},
    {carBrand: 'Lada', carYear: '1995', completed: false, id: 2},
    {carBrand: 'dsfsd', carYear: '1994', completed: true, id: 3},
    {carBrand: 'sdfsd', carYear: '1998', completed: false, id: 4}
  ];
  id: number = this.allCars.length + 1;

  constructor() {
  }

  addCar(carBrand: string, carYear: string): void {
    this.allCars.push(new CarModel(carBrand, carYear, this.id++));
  }

  getUncompletedCars(): CarModel[] {
    return this.allCars.filter(car => !car.completed);
  }

  getCompletedCars(): CarModel[] {
    return this.allCars.filter(car => car.completed);
  }

  completedCar(car: CarModel): void {
    this.allCars.find((value) => value.id === car.id).completed = true;
  }
}
