import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import {
  UserState,
  UserStateModel,
} from './store/dashboard/states/user/user.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxsStoreModule } from './store/store.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, NgxsStoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ng-18-ngxs-test';

  logged = signal<{ label: string; value: string }[]>([]);

  store = inject(Store);

  @Select((state: any) => state.user.firstName) selectDecoratorFirstName!: Observable<string>;
  @Select((state: any) => state.user.lastName) selectDecoratorLastName$!: Observable<string>;
  @Select((state: any) => state.user.userId) selectDecoratorUserId$!: Observable<string>;
  @Select((state: any) => state.user) selectDecoratorUser$!: Observable<UserStateModel>;

  selectorUser$ = this.store.select(UserState.getUser);
  utilSelectorFirstName$ = this.store.select(UserState.selectors.firstName);

  ngOnInit(): void {
    this.selectorUser$.subscribe((user) => console.log('selector user changed', user));
    this.utilSelectorFirstName$.subscribe((name) => console.log('util selector first name changed', name));
    this.selectDecoratorUser$.subscribe((user2) => console.log('selector decorator changed', user2));

    this.selectDecoratorUserId$.subscribe((userId) => console.log('selector decorator user id changed:', userId));
    this.selectDecoratorFirstName.subscribe((firstName) =>
      console.log('selector decorator first name changed:', firstName)
    );
    this.selectDecoratorLastName$.subscribe((lastName) =>
      console.log('selector decorator last name changed:', lastName)
    );
  }

  updateLogs(label: string, value: string) {
    this.logged.update((x) => [...x, { label, value }]);
  }
}
