import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitting: boolean = false;
  buttonMessage: string = 'Submit'
  submitted: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitting = !this.submitting;
    setTimeout(() => {
      this.submitting = !this.submitting;
      this.submitted = !this.submitted;
    }, 2000)
  }

}
