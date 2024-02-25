import { Component } from '@angular/core';
import { NavItems } from '../../types/navItems';
import { navItems } from './navItems';
import { RouterModule } from '@angular/router';
import { SidenavOpenClose } from '../../animations/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [SidenavOpenClose],
})
export class SidenavComponent {
  navItems: NavItems[] = navItems;
  sidenavOpened = false;
}
