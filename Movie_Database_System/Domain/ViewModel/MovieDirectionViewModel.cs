/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class MovieDirectionViewModel
    {
        public int Id { get; set; }
        public int DirectorId { get; set; }
        public int MovieId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
       
        public string Title { get; set; }
    }
    public class InsertMovieDirection
    {
        public int DirectorId { get; set; }
        public int MovieId { get; set; }
    }
    public class UpdateMovieDirection : InsertMovieDirection
    {
        public int Id { get; set;}
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
    public class MovieDirectionViewModel
    {
        public int Id { get; set; }
        public int DirectorId { get; set; }
        public int MovieId { get; set; }
        public string DirectorFirstName { get; set; }
        public string DirectorLastName { get; set; }

        public string Title { get; set; }
    }
    public class InsertMovieDirection
    {
        public string DirectorFirstName { get; set; }
        public string Title { get; set; }
    }
    public class UpdateMovieDirection : InsertMovieDirection
    {
        public int Id { get; set; }
        public int DirectorId { get; set; }
        public int MovieId { get; set; }
    }
}
