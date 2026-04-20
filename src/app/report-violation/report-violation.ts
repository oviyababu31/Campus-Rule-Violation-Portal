import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FineService } from '../fine.service';

@Component({
  selector: 'app-report-violation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-violation.html'
})
export class ReportViolationComponent {
  // These variables bind to your [(ngModel)] in the HTML
  studentName: string = '';
  rollNo: string = '';
  year: string = '';
  section: string = '';
  selectedReason: string = '';

  // Your specific college fine rates
  fineRates: any = {
    'Absent': 50,
    'Mobile Phone Use': 100,
    'No ID Card': 30,
    'Slippers (No Permission)': 20
  };

  constructor(private fineService: FineService) {}

  submitFine() {
    // 1. Create the detailed fine object
    const newFine = {
      studentName: this.studentName,
      rollNo: this.rollNo,
      year: this.year,
      section: this.section,
      reason: this.selectedReason,
      amount: this.fineRates[this.selectedReason],
      date: new Date().toLocaleString()
    };

    // 2. Save it using the service
    this.fineService.addFine(newFine);

    // 3. Notify user and clear the form
    alert(`Fine of ₹${newFine.amount} generated for ${this.studentName}`);
    this.resetForm();
  }

  resetForm() {
    this.studentName = '';
    this.rollNo = '';
    this.year = '';
    this.section = '';
    this.selectedReason = '';
  }
}
