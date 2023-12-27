/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class MovieCastViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ActorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
      
        public string Role { get; set; }
    }
    public class InsertMovieCast
    {
        public int MovieId { get; set; }
        public int ActorId { get; set; }
        public string Role { get; set; }
    }
    public class UpdateMoviecast : InsertMovieCast
    {
        public int Id { get; set; }
    }
}


*/


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class MovieCastViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ActorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }

        public string Role { get; set; }
    }
    public class InsertMovieCast
    {
        public string MovieTitleName { get; set; }  
        public string ActorFirstName { get; set; }
        public string Role { get; set; }
    }
    public class UpdateMoviecast : InsertMovieCast
    {
        public int Id { get; set; }
        public int MovieId { get; set; }  
        public int ActorId { get; set; }
    }
}




