import { Component,OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/serviceCubos';
import {Router,Params, ActivatedRoute} from "@angular/router" 
import {Cubo} from 'src/app/models/cubo'

@Component({
  selector: 'app-marcascubo',
  templateUrl: './marcascubo.component.html',
  styleUrls: ['./marcascubo.component.css']
})
export class MarcascuboComponent implements OnInit{


  constructor(private _ServiceCubos : ServiceCubos,  private _activeRoute:ActivatedRoute){}
  
  public marca!: string
  public cubos!: Array<Cubo>
  
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var marcacubo = parametros['marca']
     this.marca=marcacubo
     console.log(this.marca)
    })

    this._ServiceCubos.getCubosByMarca(this.marca).subscribe(response=>{
      this.cubos = response
      console.log(this.cubos)
    })
  }
}
