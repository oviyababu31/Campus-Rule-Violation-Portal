import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FineService } from '../fine.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  students: any[] = [];
  totalFines: number = 0;
  totalAmount: number = 0;
  totalStudents: number = 0; // ✅ NEW

  constructor(private fineService: FineService) {}

  ngOnInit() {
    const fines = this.fineService.getFines();

    this.students = fines;

    // Total violations
    this.totalFines = fines.length;

    // Total amount
    this.totalAmount = this.fineService.getTotalFineAmount();

    // Unique student count (based on rollNo)
    const unique = new Set(fines.map(f => f.rollNo));
    this.totalStudents = unique.size;
  }
}