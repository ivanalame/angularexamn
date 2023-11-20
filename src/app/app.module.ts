import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { ServiceCubos } from './services/serviceCubos';
import { MarcascuboComponent } from './components/marcascubo/marcascubo.component';
import { ValoracioncomponentComponent } from './components/valoracioncomponent/valoracioncomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarcascuboComponent,
    ValoracioncomponentComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
