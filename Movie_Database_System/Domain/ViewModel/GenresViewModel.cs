using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class GenresViewModel
    {
        public int Id { get; set; }
        public string Gen_Title { get; set; }
    }
    public class InsertGenres
    {
        public string Gen_Title { get; set; }
    }
    public class UpdateGenres : InsertGenres
    {
        public int Id { get; set; }
    }
}
