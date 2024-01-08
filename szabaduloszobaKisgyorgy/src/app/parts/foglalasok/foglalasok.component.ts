import { Component } from '@angular/core';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent {
  id:any
  cim:any
  datum:any
  fo:any
  iranyitoszam:any
  nev:any

  oszlopok=[
    {key:"cim", text:"Cím"},
    {key:"datum", text:"Dátum"},
    {key:"fo", text:"Fő"},
    {key:"iranyitoszam", text:"Irányítószám"},
    {key:"nev", text:"Név"},
  ]
}
