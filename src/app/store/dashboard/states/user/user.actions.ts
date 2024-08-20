import { UserStateModel } from './user.state';

export class SetUser {
  static readonly type = '[User] set user';
  constructor(readonly payload: UserStateModel) {}
}

export class SetFirstName {
  static readonly type = '[User] set first name';
  constructor(readonly firstName: string) {}
}

export class SetLastName {
  static readonly type = '[User] set last name';
  constructor(readonly lastName: string) {}
}
