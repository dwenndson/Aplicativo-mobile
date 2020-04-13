import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../Models/noticia.models';

@Component({
  selector: 'app-noticia-detalhe',
  templateUrl: './noticia-detalhe.page.html',
  styleUrls: ['./noticia-detalhe.page.scss'],
})
export class NoticiaDetalhePage implements OnInit {
  noticia: Noticia
  constructor(private state: ActivatedRoute) { }

  ngOnInit() {
    this.noticia = JSON.parse(this.state.snapshot.params.noticia)
    console.log(this.noticia)
  }

}
