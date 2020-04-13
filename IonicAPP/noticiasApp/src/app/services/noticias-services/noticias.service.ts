import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/Models/noticia.models';
import { Autor } from 'src/app/Models/autor.models';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http: HttpClient) { }

  verNoticias() : Observable<Noticia[]>
  {
    return this.http.get<Noticia[]>("https://localhost:44397/api/noticia/")
  }

  adicionarNoticia(noticia: Noticia) : Observable<boolean>
  {
    return this.http.post<boolean>("https://localhost:44397/api/noticia/",noticia)
  }
  
  deletarNoticia(id: number) : Observable<boolean>
  {
    return  this.http.delete<boolean>("https://localhost:44397/api/noticia/" + id)
  }

  listaDeAutores() : Observable<Autor[]>
  {
    return this.http.get<Autor[]>("https://localhost:44397/api/noticia/listaDoAutores")
  }
  editarNoticia(noticia: Noticia): Observable<boolean>
  {
    return this.http.put<boolean>("https://localhost:44397/api/noticia/",noticia)
  }
}
