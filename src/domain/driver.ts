import { Passenger } from "./passenger";

export interface Driver extends Passenger {
    // TODO: add vehicle data
    domain: string; 
    modelYear: number; 
    colorName: string;
    brandId: number;
    modelId: number; 
    image: string;
}