using System.ComponentModel.DataAnnotations;

namespace NoticiasAPI.Models
{
    public class Autor : Base
    {
        [Required(ErrorMessage = "O nome é obrigatório")]
        public string Name{ get; set; }
        public string Apelido { get; set; }
    }
}
