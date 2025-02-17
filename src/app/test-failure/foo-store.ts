import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';

class FooStateModel {
  foo = 'foo string';
}

export const FOO_STATE = new StateToken<FooStateModel>('foo');

@State<FooStateModel>({
  name: FOO_STATE,
  defaults: new FooStateModel(),
})
@Injectable()
export class FooState {}
