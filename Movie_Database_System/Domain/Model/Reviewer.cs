using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Reviewer : BaseEntityClass
    {
        public string Name {  get; set; }
        public DateTime DOB { get; set; }
        public string Address {  get; set; }
        public string Country {  get; set; }
        public string State {  get; set; }
        public string City { get; set; }
        public string PinCode {  get; set; }
        public string Mobileno {  get; set; }

        [JsonIgnore] 
        public ICollection<Rating> Rating { get; set; }

    }
}
