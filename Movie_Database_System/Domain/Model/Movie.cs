using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Movie : BaseEntityClass
    {
        public string Title { get; set; }
        public string MovieYear {  get; set; }
        public string MovieTime { get; set; }
        public string MovieLanguage { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Movie_Relase_Country { get; set; }

        [JsonIgnore]
        public List<Movie_Genres> MovieGenres { get; set; }
        public List<Movie_Direction> MovieDirection { get; set; }
        public List<Rating> Ratings { get; set; }
        public List<Movie_Cast> MovieCasts { get; set; }
    }
}
