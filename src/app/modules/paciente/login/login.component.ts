import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    cpf: ["", Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.form.value)
  }

}
