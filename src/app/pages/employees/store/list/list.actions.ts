import { Action } from '@ngrx/store';
import { User } from './list.models';

export enum Types {
    READ = '[Employees] Read: Start',
    READ_SUCCESS = '[Employees] Read: Success',
    READ_ERROR = '[Employees] Read: Error'
}

// Read
//read data
export class Read implements Action {
    readonly type = Types.READ;
    constructor() { }
}
//read data and display data
export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public items: User[]) { }
}
//if get error
export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string) { }
}

export type All
    = Read
    | ReadSuccess
    | ReadError;
