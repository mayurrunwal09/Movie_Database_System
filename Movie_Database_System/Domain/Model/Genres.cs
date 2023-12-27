using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Genres : BaseEntityClass
    {
        public string Gen_Title {  get; set; }


        [JsonIgnore]
        public ICollection<Movie_Genres> Movie_Genres { get; set; }
        public ICollection<Movie_Cast> Movie_Casts { get;}
    }
}
