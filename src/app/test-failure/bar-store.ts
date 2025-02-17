import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';

class BarStateModel {
  bar = 'bar string';
}

export const BAR_STATE = new StateToken<BarStateModel>('bar');

@State<BarStateModel>({
  name: BAR_STATE,
  defaults: new BarStateModel(),
})
@Injectable()
export class BarState {}
