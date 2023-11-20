import { Component } from '@angular/core';
import { ServiceCubos } from 'src/app/services/serviceCubos';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cubos!: Array<Cubo>

  constructor(private _ServiceCubos: ServiceCubos){}

  ngOnInit(): void {
    this._ServiceCubos.getTodosCubos().subscribe(response=>{
      this.cubos = response
      console.log(this.cubos)
    })
  }
}
