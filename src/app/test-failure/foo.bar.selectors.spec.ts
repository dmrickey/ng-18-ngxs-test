import { TestBed } from '@angular/core/testing';
import { FooState } from './foo-store';
import { BarState } from './bar-store';
import { NgxsModule, Store } from '@ngxs/store';
import { fooBar } from './foo.bar.selectors';

let store: Store;

describe('foobar selectors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([BarState, FooState], { developmentMode: true })],
    });

    store = TestBed.inject(Store);

    store.reset({
      foo: { foo: 'this is foo' },
      bar: { bar: 'this is bar' },
    });
  });

  it('should select', () => {
    const value = store.selectSnapshot(fooBar('prepend'));
    expect(value).toEqual('blah');
  });
});
