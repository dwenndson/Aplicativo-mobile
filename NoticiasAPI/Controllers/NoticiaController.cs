using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using NoticiasAPI.Models;
using NoticiasAPI.Services;

namespace NoticiasAPI.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class NoticiaController : ControllerBase
    {
        private readonly NoticiasService _noticiasService;
        public NoticiaController(NoticiasService noticiasService)
        {
            _noticiasService = noticiasService;
        }
        [HttpGet]
        public IActionResult ListaDeNoticias()
        {
            var resultado = _noticiasService.ObeterNoticia();
            return Ok(resultado);
        }
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult AdicionarNoticia([FromBody] Noticia noticia)
        {
            var resultado = _noticiasService.AdicionarNoticias(noticia);
            return resultado ? Ok() : (IActionResult)BadRequest();
        }

        [HttpPut]
        public IActionResult Editar([FromBody] Noticia noticia)
        {
            var resultado = _noticiasService.EditarNoticia(noticia);
            return resultado ? Ok() : (IActionResult)BadRequest();
        }
        [HttpDelete]
        [Route("{Id}")]
        public IActionResult Deletar([FromRoute] int Id)
        {
            var resultado = _noticiasService.RemoverNoticia(Id);
            return resultado ? Ok() : (IActionResult)BadRequest();
        }

        [HttpGet]
        [Route("listaDoAutores")]
        public IActionResult ListaDeAutores()
        {
            return Ok(_noticiasService.ListaDeAutores());
        }

    }
}