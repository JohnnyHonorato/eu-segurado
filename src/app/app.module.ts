import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
