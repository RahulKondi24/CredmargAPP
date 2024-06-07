import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  vendors: any[] = [];
  selectedVendors: string[] = [];

  constructor(private emailService: EmailService, private vendorService: VendorService) { 
    this.getVendors();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getVendors(): void {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
      this.selectedVendors = data.map((item: any) => item.email);
      console.log(this.selectedVendors)
    });
  }

  sendEmails(): void {
    this.emailService.sendEmails(this.selectedVendors).subscribe(() => {
      console.log(this.selectedVendors)
      alert('Emails sent successfully');
      this.selectedVendors = [];
    });
  }
}
