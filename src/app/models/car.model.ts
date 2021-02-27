export class CarModel {
  completed: boolean;
  constructor( public carBrand: string,  public carYear: string, public id: number) {
    this.completed = false;
  }
}
