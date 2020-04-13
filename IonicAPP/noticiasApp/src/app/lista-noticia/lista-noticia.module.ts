import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNoticiaPageRoutingModule } from './lista-noticia-routing.module';

import { ListaNoticiaPage } from './lista-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNoticiaPageRoutingModule
  ],
  declarations: [ListaNoticiaPage]
})
export class ListaNoticiaPageModule {}
