import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";     

// import {Cubo} from "./../models/cubo"

@Injectable()
export class ServiceCubos {
    constructor(private _http: HttpClient){}

    getTodosCubos():Observable<any>{
        var request = "/api/Cubos/"
        var url = environment.urlexamen+request
        return  this._http.get(url)
    }

    getCubos():Observable<any>{
        var request = "/api/Cubos/marcas"
        var url = environment.urlexamen+request
        return  this._http.get(url)
    }

    getCubosByMarca(marca:any):Observable<any>{
        var request = "/api/Cubos/CubosMarca/"+marca
        var url = environment.urlexamen+request
        return this._http.get(url)
    }

    getCuboByID(id:number):Observable<any>{
        var request  ="/api/Cubos/"+id
        var url = environment.urlexamen +request
        return this._http.get(url)
    }

    getComentariosCubo(id:number):Observable<any>{
        var request  ="api/comentarioscubo/getcomentarioscubo/"+id
        var url = environment.urlexamen +request
        return this._http.get(url)
    }
}