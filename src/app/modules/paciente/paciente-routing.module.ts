import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
    children: [
      {
        path: '*',
        redirectTo: '/login/:empresa',
        pathMatch: 'full'
      },
      {
        path: 'login/:empresa',
        component: LoginComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
