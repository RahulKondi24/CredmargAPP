import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-view-emails',
  templateUrl: './view-emails.component.html',
  styleUrls: ['./view-emails.component.css']
})
export class ViewEmailsComponent implements OnInit {
  emails: any[] = [];

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.getSentEmails();
    console.log(this.emails);
  }

  getSentEmails(): void {
    this.emailService.getSentEmails().subscribe(data => {
      this.emails = data;
      console.log(data);
    });
  }
}
