import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IconPickerComponent } from './components/icon-picker/icon-picker.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'budget-mate';

  constructor(private _dialog: MatDialog) {}

  openIconPicker() {
    this._dialog.open(IconPickerComponent);
  }
}
