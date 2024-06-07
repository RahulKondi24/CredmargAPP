import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ViewEmailsComponent } from './components/view-emails/view-emails.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'view-emails', component: ViewEmailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
