using Microsoft.EntityFrameworkCore;
using NoticiasAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoticiasAPI.Services
{
    public class NoticiasService
    {
        private readonly Contexto _context;
        public NoticiasService(Contexto context)
        {
            _context = context;
        }

        public List<Noticia> ObeterNoticia()
        {
            var noticias = _context.Noticias.Include(x => x.Autor).ToList();
            return noticias;
        }

        public Boolean AdicionarNoticias(Noticia _noticia)
        {
            try
            {
                _context.Noticias.Add(_noticia);
                _context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                Console.WriteLine(_noticia);
              return false;
            }
        }
        
        public Boolean EditarNoticia(Noticia noticia)
        {
            try
            {
                var newNoticia = _context.Noticias.Where(b => b.Id == noticia.Id).FirstOrDefault();
                newNoticia.Titulo = noticia.Titulo;
                newNoticia.Descricao = noticia.Descricao;
                newNoticia.Conteudo = noticia.Conteudo;
                newNoticia.Date = noticia.Date;
                newNoticia.AutorId = noticia.AutorId;
                _context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                return false;
            }
        }

        public Boolean RemoverNoticia(int Id)
        {
            try
            {
                var _noticia = _context.Noticias.Where(c => c.Id == Id).FirstOrDefault();
                _context.Remove(_noticia);
                _context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                return false;
            }
        }

        public List<Autor> ListaDeAutores()
        {
            try
            {
                var autores = _context.Autors.ToList();
                return autores;
            }
            catch(Exception e)
            {
                return new List<Autor>();
            }
        }
    }
}
