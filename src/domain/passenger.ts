import {Wallet} from "./wallet"
export interface Passenger {
    userId: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    wallet: Wallet;
}
