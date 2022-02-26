import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  textCpf: string = ''
  empresa: any

  form: FormGroup = this.formBuilder.group({
    textCpf: ["", Validators.required],
    empresa: ["", Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private service: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empresa = params['empresa']
    })
  }
  onSubmit() {
    let body = {
      textCpf: this.textCpf,
      empresa: this.empresa.toUpperCase()
    }
    console.log(body)
    this.service.postUser(body).subscribe(data => {
      console.log('retorn api', data)
    })
  }

}
