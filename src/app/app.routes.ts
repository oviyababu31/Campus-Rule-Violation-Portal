import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { FineHistoryComponent } from './fine-history/fine-history';
import { ReportViolationComponent } from './report-violation/report-violation';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report', component: ReportViolationComponent },
  { path: 'history', component: FineHistoryComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];