using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Director : BaseEntityClass
    {
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public DateTime DOB {  get; set; }

               [JsonIgnore]
        public ICollection<Movie_Direction> Movie_Directions { get; set; }
    }
}
