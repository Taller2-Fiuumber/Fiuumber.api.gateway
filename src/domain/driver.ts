import { User } from "./user";

export interface Driver extends User {
    // TODO: add vehicle data
    domain: string; 
    modelYear: number; 
    colorName: string;
    brandId: number;
    modelId: number; 
    image: string;
}