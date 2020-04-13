using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoticiasAPI.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options): base(options)
        {
        }

        public DbSet<Autor> Autors { get; set; }
        public DbSet<Noticia> Noticias { get; set; }
    }
}
