using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoticiasAPI.Models
{
    public class Noticia : Base
    {
        [Required(ErrorMessage = "Campo Obrigatório")]
        public string Titulo { get; set; }
        [MaxLength(300)]
        public string Descricao { get; set; }
        public string Conteudo { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }
        [ForeignKey("Autor.Id")]
        public int AutorId { get; set; }
        public Autor Autor { get; set; }     
        
       
    }

}
