import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias-services/noticias.service';
import { Autor } from '../Models/autor.models';
import { Noticia } from '../Models/noticia.models';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  autores: Autor[] = new Array<Autor>();
  noticia: Noticia = new Noticia();
  eEditado: boolean = false;

  constructor(
    private noticiaService: NoticiasService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private estado: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.estado.snapshot.params.noticiaEditar != undefined)
    {
      this.noticia = new Noticia(JSON.parse(this.estado.snapshot.params.noticiaEditar));
      this.eEditado = true;
    }
    this.noticiaService.listaDeAutores().subscribe((listaDeAutores)=>{
      this.autores = listaDeAutores
      
    })
  }
  async adicionar(){
    
    this.noticia = new Noticia(JSON.parse(this.estado.snapshot.params.noticiaEditar));

    const loading = await this.loadingController.create({
      message: 'Adicionando Noticia',
      duration: 5000
    })
    await loading.present();
    this.noticiaService.adicionarNoticia(this.noticia).subscribe(() => {
      this.noticia = new Noticia(null)
    loading.dismiss();
    this.mostrarMessage('Notícia adicionada com sucesso')
  },
  error => {
    loading.dismiss();
    this.mostrarMessage('Notícia não adicionada')
  })
  }

  async editar(){
    
    this.noticia = new Noticia(JSON.parse(this.estado.snapshot.params.noticiaEditar));

    const loading = await this.loadingController.create({
      message: 'Editando Noticia',
      duration: 5000
    })
    await loading.present();
    this.noticiaService.editarNoticia(this.noticia).subscribe(() => {
      loading.dismiss();
    this.mostrarMessage('Notícia editada com sucesso')
    this.router.navigate(['lista-noticia'])
  },
  error => {
    loading.dismiss();
    this.mostrarMessage('Notícia não adicionada')
  })
  
  }

  async mostrarMessage(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
 