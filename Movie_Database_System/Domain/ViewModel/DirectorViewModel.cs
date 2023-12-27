using Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public  class DirectorViewModel
    {
        public int Id { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }

        [JsonIgnore]
        public ICollection<Movie_Direction> Movie_Directions { get; set; }
    }
    public class InsertDirector
    {
   
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }

   
    }
    public class UpdateDirector : InsertDirector
    {
        public int Id { get; set;}
    }
}
