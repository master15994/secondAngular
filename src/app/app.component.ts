import { Component, ErrorHandler, OnInit } from '@angular/core';

import { NewServiceService } from './service/local-acc-service.service';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewServiceService],
})
export class AppComponent implements OnInit {
  submit() {
    console.log('Form submitted', this.form);
  }

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});
  }
}
