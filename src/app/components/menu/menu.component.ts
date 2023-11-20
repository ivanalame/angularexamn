import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/serviceCubos';
import {Cubo} from 'src/app/models/cubo'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

    public cubos!: Array<Cubo>

    constructor(private _ServiceCubos: ServiceCubos){}

    ngOnInit(): void {
      this._ServiceCubos.getCubos().subscribe(response=>{
        this.cubos = response
        console.log(this.cubos)
      })
    }
}
