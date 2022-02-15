import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'paciente', pathMatch: 'full' },
  {
    path: 'paciente',
    loadChildren: () => import('./modules/paciente/paciente.module').then((m) => m.PacienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
