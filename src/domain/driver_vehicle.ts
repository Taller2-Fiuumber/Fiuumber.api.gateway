import { Vehicle } from "./vehicle";

export class DriverVehicle {
  domain: string;
  modelYear: string;
  colorName: string;
  vehicle: Vehicle;

  constructor(
    domain: string,
    modelYear: string,
    colorName: string,
    vehicle: Vehicle
  ) {
    this.domain = domain;
    this.modelYear = modelYear;
    this.colorName = colorName;
    this.vehicle = vehicle;
  }
}
