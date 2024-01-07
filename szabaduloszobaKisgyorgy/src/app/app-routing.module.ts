import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './parts/fooldal/fooldal.component';
import { FoglalasokComponent } from './parts/foglalasok/foglalasok.component';
import { UjfoglalasComponent } from './parts/ujfoglalas/ujfoglalas.component';

const routes: Routes = [
  {path:'fooldal', component:FooldalComponent},
  {path:'foglalasok', component:FoglalasokComponent},
  {path:'ujfoglalas', component:UjfoglalasComponent},
  {path:'', component:FooldalComponent},
  {path:'**', component:FooldalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
