import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
//import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'covoit-ang';
}
