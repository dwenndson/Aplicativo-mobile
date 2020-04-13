using NoticiasAPI.Models;
using System;
using Xunit;

namespace XUnitTestProject1
{
    public class NoticiaTest
    {
        [Fact]
        public void CadastroNoticiaTest()
        {
            var noticia = new Noticia
            {
                Id = 1,
                Conteudo = "As aventuras de Harry Potter",
                Date = DateTime.Now,
                Descricao =  "fantasia",
                Titulo = "Harry Potter",
                AutorId = 0,
                Autor =
                {
                    Id = 0,
                    Name = "J.K. Rowling",
                    Apelido = "J.K"
                }
                

            };
        }
    }
}
