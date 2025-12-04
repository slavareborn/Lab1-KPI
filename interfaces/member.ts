import { Person } from "./common";
export interface Member extends Person {
    email: string; 
    memberShipDate: Date; 
}