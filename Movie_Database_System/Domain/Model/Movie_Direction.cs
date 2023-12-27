using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Movie_Direction : BaseEntityClass
    {
        public int DirectorId { get; set; }
        public int MovieId { get; set;}

        [JsonIgnore]
        public Director Directors { get; set; }
        public Movie Movie { get; set; }        
    }
}
