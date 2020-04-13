import { Autor } from './autor.models';
import { base } from './base.models';

export interface Noticia {
    id: base
    noticiaId: number;
    titulo: string;
    descricao: string;
    conteudo: string;
    date: Date;
    autorId: number;
    autor: Autor;
}

export class Noticia{
    id: base
    noticiaId: number;
    titulo: string;
    descricao: string;
    conteudo: string;
    date: Date;
    autorId: number;
    autor: Autor;

    constructor(datos?: Noticia){
        if(datos != null){
            this.id = datos.id;
            this.noticiaId = datos.noticiaId;
            this.titulo = datos.titulo;
            this.conteudo = datos.conteudo;
            this.date = datos.date;
            this.autorId = datos.autorId;
            this.autor = datos.autor;
            return
        }else{
            this.id = this.id;
            this.noticiaId = this.noticiaId;
            this.titulo = this.titulo;
            this.conteudo = this.conteudo;
            this.date = this.date;
            this.autorId = this.autorId;
            this.autor = this.autor;
        }
    }
}