export class CarModel {
  carBrand: string;
  carYear: string;
  completed: boolean;
  id: number;
  constructor(carBrand: string, carYear: string, id: number) {
    this.carBrand = carBrand;
    this.carYear = carYear;
    this.id = id;
    this.completed = false;
  }
}
