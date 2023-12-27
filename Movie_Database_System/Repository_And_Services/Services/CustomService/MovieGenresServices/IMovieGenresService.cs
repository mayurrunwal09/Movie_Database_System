using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieGenresServices
{
    public interface IMovieGenresService
    {
        Task<ICollection<MoviegenresViewModel>> GetAll();
        Task<MoviegenresViewModel> GetById(int id);
        Task<MoviegenresViewModel> GetByName(string name);
        Movie_Genres GetLast();
        Task<bool> Insert(InsertMoviegenres inserFood);
        Task<bool> Update(UpdateMoviegenres StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Movie_Genres> Find(Expression<Func<Movie_Genres, bool>> match);
    }
}
