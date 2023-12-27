using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieDirectionServices
{
    public interface IMovieDirectionService
    {
        Task<ICollection<MovieDirectionViewModel>> GetAll();
        Task<MovieDirectionViewModel> GetById(int id);
        Task<MovieDirectionViewModel> GetByName(string name);
        Movie_Direction GetLast();
        Task<bool> Insert(InsertMovieDirection inserFood);
        Task<bool> Update(UpdateMovieDirection StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Movie_Direction> Find(Expression<Func<Movie_Direction, bool>> match);


    }
}
