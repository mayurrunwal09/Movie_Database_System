using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieCastServices
{
    public interface IMovieCastService
    {
        Task<ICollection<MovieCastViewModel>> GetAll();
        Task<MovieCastViewModel> GetById(int id);
        Task<MovieCastViewModel> GetByName(string name);
        Movie_Cast GetLast();
        Task<bool> Insert(InsertMovieCast inserFood);
        Task<bool> Update(UpdateMoviecast StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Movie_Cast> Find(Expression<Func<Movie_Cast, bool>> match);
    }
}
