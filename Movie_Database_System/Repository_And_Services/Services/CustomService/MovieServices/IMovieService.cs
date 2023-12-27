using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieServices
{
    public  interface IMovieService
    {
        Task<ICollection<MovieViewModel>> GetAll();
        Task<MovieViewModel> GetById(int id);
        Task<MovieViewModel> GetByName(string name);
        Movie GetLast();
        Task<bool> Insert(insertMovie inserFood);
        Task<bool> Update(Updatemovie StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Movie> Find(Expression<Func<Movie, bool>> match);
    }
}
