import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: any[] = [];
  newVendor = { name: '', email: '', upi: '' };

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.getVendors();
  }

  getVendors(): void {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

  addVendor(): void {
    this.vendorService.createVendor(this.newVendor).subscribe(() => {
      this.getVendors();
      this.newVendor = { name: '', email: '', upi: '' };
    });
  }
}
