import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, createPropertySelectors  } from '@ngxs/store';
import { SetUser } from './user.actions';

export interface UserStateModel {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  positionId: string;
  positionName: string;
  departmentCode: string;
  departmentName: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    userId: '1234',
    email: '',
    firstName: 'First Name',
    lastName: 'Last Name',
    fullName: '',
    positionId: '',
    positionName: '',
    departmentCode: '',
    departmentName: '',
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUser(state: UserStateModel): UserStateModel {
    return state;
  }

  static selectors = createPropertySelectors<UserStateModel>(UserState);

  @Action(SetUser)
  setUser(ctx: StateContext<UserStateModel>, { payload }: SetUser) {
    ctx.setState(payload);
  }
}
