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

  @Select((state: any) => state.user.firstName) firstName$!: Observable<string>;
  @Select((state: any) => state.user.lastName) lastName$!: Observable<string>;
  @Select((state: any) => state.user.userId) userId$!: Observable<string>;

  user$ = this.store.select(UserState.getUser);
  @Select((state: any) => state.user) user2$!: Observable<UserStateModel>;

  ngOnInit(): void {
    this.user$.subscribe((user) => console.log('user changed', user));
    this.user2$.subscribe((user2) => console.log('user2 changed', user2));

    this.userId$.subscribe((userId) => console.log('user id changed:', userId));
    this.firstName$.subscribe((firstName) =>
      console.log('first name changed:', firstName)
    );
    this.lastName$.subscribe((lastName) =>
      console.log('last name changed:', lastName)
    );
  }

  updateLogs(label: string, value: string) {
    this.logged.update((x) => [...x, { label, value }]);
  }
}
