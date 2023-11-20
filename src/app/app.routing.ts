import { Routes,RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home/home.component"
import { MarcascuboComponent } from "./components/marcascubo/marcascubo.component";
import { ValoracioncomponentComponent } from "./components/valoracioncomponent/valoracioncomponent.component";

const appRoutes : Routes  =[
    {path : "", component: HomeComponent},
    {path : "marcascubo/:marca", component: MarcascuboComponent},
    {path : "valoracion/:id", component: ValoracioncomponentComponent},

]


export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders<any>= RouterModule.forRoot(appRoutes)