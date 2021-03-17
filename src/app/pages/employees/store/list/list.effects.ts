import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { User } from './list.models';

import * as fromActions from './list.actions';

type Action = fromActions.All;

import { extractDocumentChangeActionData } from '@app/shared/utils/data';

@Injectable()
export class ListEffects {

    constructor(
        private actions: Actions,
        private afs: AngularFirestore
    ) { }

    @Effect()
    read: Observable<Action> = this.actions.pipe(
        ofType(fromActions.Types.READ),
        switchMap(() =>
        //will take employee role bcoz want to display employees detail
            this.afs.collection<User>('users', ref => ref.where('roleId', 'in', ['employee', 'recruiter'])).snapshotChanges().pipe(
                take(1),
                map(changes => changes.map(x => extractDocumentChangeActionData(x, false))),
                map((items: User[]) => new fromActions.ReadSuccess(items)),
                catchError(err => of(new fromActions.ReadError(err.message)))
            )
        )
    );

}
