import { User } from "./user";
import { DriverVehicle } from "./driver_vehicle";

export interface Driver extends User {
   vehicle: DriverVehicle;
}
