import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNoticiaPage } from './lista-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNoticiaPageRoutingModule {}
