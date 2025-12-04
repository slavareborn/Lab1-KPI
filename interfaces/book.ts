import { Common } from "./common";
export interface Book extends Common {
    title: string;
    author: string;
    amountOfPages: number;
    cost: number;
    publisherYear: Date;
    publication: string;
    copiesAvailable: number;
}