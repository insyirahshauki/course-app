import { firestore } from 'firebase/app';
import { Employee, Recruiter } from './roles';

export * from './roles';
export interface User {
    uid: string;
    firstname: string;
    lastname: string;
    birthdate: number;
    photoURL: string;
    email: string;
    country: string;
    about?: string;
    roleId: string;
    role: Employee | Recruiter | any;
    created: firestore.FieldValue;
    updated?: firestore.FieldValue;
}
