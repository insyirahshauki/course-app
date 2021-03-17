import { User as DBUser, Employee } from '@app/models/backend/user';

//will display employee and recruiter data but it will display employee sbb role = employee
export interface User extends DBUser {
    role: Employee;
}
