import { Component,OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/serviceCubos';
import {Router,Params, ActivatedRoute} from "@angular/router" 
import {Cubo} from 'src/app/models/cubo'
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-valoracioncomponent',
  templateUrl: './valoracioncomponent.component.html',
  styleUrls: ['./valoracioncomponent.component.css']
})
export class ValoracioncomponentComponent implements OnInit{

  public idcubo!: number
  public cuboDetalle !: Cubo
  public ComentariosCubo!: Array<Comentario>
  constructor(private _ServiceCubos : ServiceCubos,  private _activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var id = parametros['id']
     this.idcubo=id
     console.log(this.idcubo)
    })

    this._ServiceCubos.getCuboByID(this.idcubo).subscribe(response=>{  
      this.cuboDetalle = response
    })

    this._ServiceCubos.getComentariosCubo(this.idcubo).subscribe(response=>{
      console.log(response)
      this.ComentariosCubo = response


    })

   
  }
  
}
