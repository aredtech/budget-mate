import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { CurrenTab } from '../../types/header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentTab: CurrenTab = CurrenTab.OVERVIEW;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event | RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        if (event instanceof Event || event instanceof RouterEvent) {
          switch (event.url) {
            case '/cards':
              this.currentTab = CurrenTab.CARDS;
              return;

            case '/overview':
              this.currentTab = CurrenTab.OVERVIEW;
              return;

            case '/expenses':
              this.currentTab = CurrenTab.EXPENSES;
              return;

            case '/settings':
              this.currentTab = CurrenTab.SETTINGS;
              return;
          }
        }
      });
  }

  ngOnInit(): void {}
}
