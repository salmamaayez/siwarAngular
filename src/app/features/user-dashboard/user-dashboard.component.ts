import {  Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterLink,DashboardCardComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
  standalone:true,
})
export class UserDashboardComponent {

}
