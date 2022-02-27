import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivationEnd, NavigationEnd } from '@angular/router';
import { Event } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  empresa: any

  constructor(private router: Router, private route: ActivatedRoute, private toast: ToastrService) {
    this.empresa = localStorage.getItem('empresa')
  }

  checkLogin() {
    if (localStorage.getItem('user') == null && localStorage.getItem('logado') == null) {
      this.router.navigate(['/paciente/login', this.empresa])
      this.toast.error("Acesso não autorizado. Por favor, faça login!", undefined, {
        positionClass: 'toast-top-center'
      })
    }
  }
}
