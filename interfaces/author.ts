import { Common } from "./common";
export interface Author extends Common {
    firstName: string;
    secondName: string;
    dateOfBirth: Date;
    dateOfDeath: Date;
}