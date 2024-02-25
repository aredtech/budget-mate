import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OverviewComponent } from './components/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'budget', component: SettingsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
