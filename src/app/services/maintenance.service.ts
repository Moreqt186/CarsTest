import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  allCars: CarModel[] = [
    {carBrand: 'Jeep', carYear: '1963', completed: false, id: 1},
    {carBrand: 'Chevrolet', carYear: '1965', completed: false, id: 2},
    {carBrand: 'Dodge', carYear: '1974', completed: true, id: 3},
    {carBrand: 'Hummer', carYear: '1978', completed: false, id: 4}
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
