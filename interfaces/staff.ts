import { Person } from "./common";
export interface Staff extends Person {
    position: string;
    education: string;
}