import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name: any;
  email: any;

  constructor(private route: ActivatedRoute , private fb:FormBuilder) {

    // Phone Number Validation
    this.form = fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  get f()
  {
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  // Fetching values from URL and binding it using template reference
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name');
      this.email = this.route.snapshot.paramMap.get('email');
    });

   
    
  }
}
