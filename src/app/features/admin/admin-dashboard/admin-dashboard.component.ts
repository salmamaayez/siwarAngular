import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  activeTab = 'overview';

  stats = [
    { title: 'Total Users', value: '12,453', change: '+12%', icon: 'fa-users', color: 'blue' },
    { title: 'Active Carpools', value: '482', change: '+5%', icon: 'fa-car', color: 'green' },
    { title: 'Ride Revenue', value: '$84,232', change: '+18%', icon: 'fa-chart-line', color: 'purple' },
    { title: 'New Drivers', value: '145', change: '+24%', icon: 'fa-id-card', color: 'orange' }
  ];

  recentActivity = [
    { user: 'Sarah Wilson', action: 'Created a new ride to Paris', time: '2 mins ago', status: 'new', icon: 'fa-plus', iconColor: 'blue' },
    { user: 'Mike Johnson', action: 'Booked a seat (Ride #1234)', time: '15 mins ago', status: 'success', icon: 'fa-check', iconColor: 'green' },
    { user: 'Anna Davis', action: 'Registered as Driver', time: '1 hour ago', status: 'info', icon: 'fa-user-plus', iconColor: 'purple' },
    { user: 'James Smith', action: 'Cancelled huge ride', time: '2 hours ago', status: 'warning', icon: 'fa-times', iconColor: 'red' }
  ];

  menuItems = [
    { id: 'overview', icon: 'fa-home', label: 'Overview', active: true },
    { id: 'users', icon: 'fa-users', label: 'Users', active: false },
    { id: 'rides', icon: 'fa-car', label: 'Rides', active: false },
    { id: 'payments', icon: 'fa-wallet', label: 'Payments', active: false },
    { id: 'settings', icon: 'fa-cog', label: 'Settings', active: false }
  ];

  // Dummy Data for Users View
  usersList = [
    { name: 'John Doe', email: 'john@example.com', role: 'Driver', status: 'Active', trips: 45, rating: 4.8 },
    { name: 'Alice Smith', email: 'alice@example.com', role: 'Passenger', status: 'Active', trips: 12, rating: 4.9 },
    { name: 'Bob Martin', email: 'bob@example.com', role: 'Driver', status: 'Suspended', trips: 8, rating: 2.5 },
    { name: 'Emma White', email: 'emma@example.com', role: 'Passenger', status: 'Pending', trips: 0, rating: 0 }
  ];

  // Dummy Data for Rides View
  ridesList = [
    { from: 'Paris', to: 'Lyon', driver: 'John Doe', date: '12 Dec, 14:00', price: '45€', seats: '2/4', status: 'Scheduled' },
    { from: 'Marseille', to: 'Nice', driver: 'Sarah Connor', date: '13 Dec, 09:30', price: '15€', seats: '3/3', status: 'Full' },
    { from: 'Bordeaux', to: 'Toulouse', driver: 'Mike Ross', date: '12 Dec, 18:00', price: '20€', seats: '1/4', status: 'Active' },
  ];

  // Dummy Data for Payments View
  paymentsList = [
    { id: '#TRX-9871', user: 'John Doe', amount: '+45.00€', type: 'Ride Payment', date: '12 Dec, 14:05', status: 'Completed' },
    { id: '#TRX-9872', user: 'System', amount: '-4.50€', type: 'Commission', date: '12 Dec, 14:05', status: 'Processed' },
    { id: '#TRX-9873', user: 'Alice Smith', amount: '+150.00€', type: 'Wallet Top-up', date: '11 Dec, 09:12', status: 'Completed' },
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.menuItems.forEach(item => item.active = item.id === tabId);
  }
}
