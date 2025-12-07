import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  imports: [],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {
  getUserInitials(): string {
    return 'JD'; // Default initials, can be replaced with actual user data
  }
}
