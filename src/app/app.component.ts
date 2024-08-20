import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { UserState } from './store/dashboard/states/user/user.state';
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
  store = inject(Store);

  selectorFirstName$ = this.store.select(UserState.getFirstName);

  // deprecated but breaks when used
  @Select((state: any) => state.user.firstName) selectDecoratorFirstName$!: Observable<string>;

  ngOnInit(): void {
    this.selectorFirstName$.subscribe((name) => console.log(`selector from util first name changed: '${name}'`));
    this.selectDecoratorFirstName$.subscribe((name) => console.log(`select decorator first name changed: '${name}'`));
  }
}
