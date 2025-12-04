export interface Common {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface Person extends Common {
    fullName: string;
    address: string;
    phone: string;
}