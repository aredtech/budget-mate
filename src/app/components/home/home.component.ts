import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SidenavComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
