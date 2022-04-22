
import { UserActions } from './user.actions';
import * as fromUser from './user';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    user: fromUser.IUserState;
}

export const appReducer: ActionReducerMap<IAppState, UserActions> = {
    user: fromUser.userReducer
}