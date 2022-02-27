import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empresa = params['empresa']
      localStorage.setItem('empresa', this.empresa)
    })
  }
  onSubmit() {
    let body = {
      textCpf: this.textCpf,
      empresa: this.empresa.toUpperCase()
    }
    this.service.postUser(body).subscribe(data => {
      console.log('retorn api', data.sucesso)
      if (data) {
        localStorage.setItem('logado', data.sucesso)
        localStorage.setItem('user', JSON.stringify(data))
        this.router.navigate(['/home'])
      }
      else {
        this.toast.error(data.mensagem, undefined, {
          positionClass: 'toast-top-center'
        })
      }
    })
  }

}
