import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivationEnd, NavigationEnd } from '@angular/router';
import { Event } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  acao: string = ''
  path: any
  iconPath: any
  empresa: string = ''

  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.url.split('/')
      }
    })
  }

  ngOnInit(): void {
    if (this.path.length > 2) {
      this.acao = 'Fazer Login'
      this.iconPath = 'account_circle'
    }
    else {
      this.acao = 'Sair'
      this.iconPath = 'exit_to_app'
    }
  }

  logout() {
    if (localStorage.getItem('logado') !== null && localStorage.getItem('user') !== null) {
      let storage = localStorage.getItem('user')
      let obj = JSON.parse(storage || '{}')
      localStorage.clear()
      this.router.navigate(['/paciente/login', obj.empresa])
    }
  }

  login() {

  }


}
