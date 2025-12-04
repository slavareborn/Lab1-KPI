import { Common } from "./common";
export interface Loan extends Common {
    LoanDate: Date;
    ReturnDate: Date;
    DueDate: Date;
}