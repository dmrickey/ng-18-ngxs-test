import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, createPropertySelectors  } from '@ngxs/store';
import { SetFirstName, SetLastName, SetUser } from './user.actions';

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

  @Selector()
  static getFirstName(state: UserStateModel): string {
    return state.firstName;
  }

  @Selector()
  static getLastName(state: UserStateModel): string {
    return state.lastName;
  }

  // doesn't work when defined within state class
  // static getSlices = createPropertySelectors<UserStateModel>(UserState);

  @Action(SetUser)
  setUser(ctx: StateContext<UserStateModel>, { payload }: SetUser) {
    ctx.setState(payload);
  }

  @Action(SetFirstName)
  setFirstName(ctx: StateContext<UserStateModel>, { firstName }: SetFirstName) {
    ctx.patchState({ firstName });
  }

  @Action(SetLastName)
  setLastName(ctx: StateContext<UserStateModel>, { lastName }: SetLastName) {
    ctx.patchState({ lastName });
  }
}

export class UserSelectors {
  static getSlices = createPropertySelectors<UserStateModel>(UserState);
}
