using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Movie_Genres : BaseEntityClass
    {
        public int MovieId {  get; set; }
        public int GenresId { get; set; }

        [JsonIgnore]
        public Movie Movie { get; set; }
        public Genres Genres { get; set; }
    }
}
