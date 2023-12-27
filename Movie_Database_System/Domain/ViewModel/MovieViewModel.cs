using Domain.Model;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class MovieViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string MovieYear { get; set; }
        public string MovieTime { get; set; }
        public string MovieLanguage { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Movie_Relase_Country { get; set; }
      
    }
    public class insertMovie
    {
        public string Title { get; set; }
        public string MovieYear { get; set; }
        public string MovieTime { get; set; }
        public string MovieLanguage { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Movie_Relase_Country { get; set; }

    }
    public class Updatemovie : insertMovie
    {
        public int Id { get; set;}
    }
}
