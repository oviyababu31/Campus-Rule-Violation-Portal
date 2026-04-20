import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FineService, Violation } from './../fine.service';

@Component({
  selector: 'app-fine-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fine-history.html'
})
export class FineHistoryComponent implements OnInit {
  fines: Violation[] = [];

  constructor(private fineService: FineService) {}

  ngOnInit() {
    // This loads the data from the service when the page opens
    this.fines = this.fineService.getFines();
  }

  // This function must be INSIDE the class to work with the HTML
  calculateGrandTotal() {
    return this.fineService.getTotalFineAmount();
  }
  
  // Helper to clear records if needed
  clearHistory() {
    if(confirm("Delete all violation records?")) {
      this.fineService.clearAllRecords();
      this.fines = [];
    }
  }
}
