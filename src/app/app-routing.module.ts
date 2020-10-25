import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ApresentacaoComponent} from './apresentacao/apresentacao.component';

const routes: Routes = [
  {
    path: '', component: ApresentacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
