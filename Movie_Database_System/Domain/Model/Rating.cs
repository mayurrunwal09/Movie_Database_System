using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Rating : BaseEntityClass
    {
        public int MovieId {  get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar {  get; set; }
        public double No_Of_Ratings { get; set; }
        public string FeedBack {  get; set; }

        [JsonIgnore]
        public Movie Movie { get; set; }
        public Reviewer Reviewer { get; set; }
    }
}
