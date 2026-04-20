import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FineService } from '../fine.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit { // Must be named DashboardComponent
  totalFines: number = 0;
  totalAmount: number = 0;

  constructor(private fineService: FineService) {}

  ngOnInit() {
    const fines = this.fineService.getFines();
    this.totalFines = fines.length;
    this.totalAmount = this.fineService.getTotalFineAmount();
  }
}