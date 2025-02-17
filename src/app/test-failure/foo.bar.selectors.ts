import { createSelector } from '@ngxs/store';
import { FOO_STATE } from './foo-store';
import { BAR_STATE } from './bar-store';

export const fooBar = (someParam: string) =>
  createSelector([FOO_STATE, BAR_STATE], (foo, bar) => `${someParam}_${foo.foo}_${bar.bar}`);
