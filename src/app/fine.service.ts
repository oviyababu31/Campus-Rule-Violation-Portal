import { Injectable } from '@angular/core';

// This interface defines exactly what data we save for every student fine
export interface Violation {
  studentName: string;
  rollNo: string;
  year: string;
  section: string;
  reason: string;
  amount: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class FineService {
  private storageKey = 'campus_fines_records';

  constructor() { }

  // 1. Get all fines from browser memory
  getFines(): Violation[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // 2. Add a new fine to the list and save it
  addFine(fine: Violation) {
    const currentFines = this.getFines();
    currentFines.push(fine);
    localStorage.setItem(this.storageKey, JSON.stringify(currentFines));
  }

  // 3. Calculate the total sum of all fines for the Dashboard
  getTotalFineAmount(): number {
    const fines = this.getFines();
    return fines.reduce((total, item) => total + item.amount, 0);
  }

  // 4. Clear all records (Useful for testing)
  clearAllRecords() {
    localStorage.removeItem(this.storageKey);
  }
}
