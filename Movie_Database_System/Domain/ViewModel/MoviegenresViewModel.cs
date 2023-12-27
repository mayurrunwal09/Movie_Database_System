using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class MoviegenresViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int GenresId { get; set; }
        public string MovieTitle { get; set; }
        public string Gen_Title { get; set; }
    }
    public class InsertMoviegenres
    {
        public string MovieTitle { get; set; }
        public string Gen_Title { get; set; }
    }
    public class UpdateMoviegenres : InsertMoviegenres
    {
        public int Id { get; set;}
        public int MovieId { get; set; }
        public int GenresId { get; set; }
    }
}
