import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias-services/noticias.service';
import { Noticia } from '../Models/noticia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-noticia',
  templateUrl: './lista-noticia.page.html',
  styleUrls: ['./lista-noticia.page.scss'],
})

export class ListaNoticiaPage implements OnInit {
  noticias: Noticia[];
  constructor(
    private noticiaService: NoticiasService,
    private route: Router,
    ) { }

  ngOnInit() {
    this.noticiaService.verNoticias().subscribe((noticias)=>{
      this.noticias = noticias;
    }, (error)=> {
      console.log(error);
    })
  }

  irADetalhe(noticia: Noticia)
  {
    this.route.navigate(['noticia-detalhe', {noticia: JSON.stringify(noticia)}])
  }

  deletar(id: number, indice: number){
    
    this.noticiaService.deletarNoticia(id).subscribe(()=>{
      this.noticias.splice(indice,1)
    },
    error =>{
      console.log(error)
    })
  }

  editar(noticiaEditar: Noticia)
  {
    this.route.navigate(['/adicionar', {noticia: JSON.stringify(noticiaEditar)}])
  }
}
