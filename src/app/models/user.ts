import { Accommodation } from "./accomodation";

export interface User {
    username: string;
    firstName: string;
    fatherSurname: string;
    motherSurname: string;
    birthDate: string;
    gender: string;
    admin: boolean;
    id?: string;
    profileImage?: string;
    accommodations?: Accommodation[];
    contacts?: Contact[]; 
}

export interface Contact {
    name: string;
    value: string;
}
