using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Actor : BaseEntityClass
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender {  get; set; }
        public DateTime DOB {  get; set; }

        [JsonIgnore] 
        public ICollection<Movie_Cast> MoviesCast { get; set; }

    }
}
