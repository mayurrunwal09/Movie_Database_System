using Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class ActorViewModel
    {
        public int Id { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }

        [JsonIgnore]
        public ICollection<Movie_Cast> MoviesCast { get; set; }
    }
    public class InsertActor
    {
      
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }

        
    }
    public class UpdateActor : InsertActor
    {
        public int Id { get; set;}
    }
}
