using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.GenresServices
{
    public interface IGenresService
    {
        Task<ICollection<GenresViewModel>> GetAll();
        Task<GenresViewModel> GetById(int id);
        Task<GenresViewModel> GetByName(string name);
        Genres GetLast();
        Task<bool> Insert(InsertGenres inserFood);
        Task<bool> Update(UpdateGenres StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Genres> Find(Expression<Func<Genres, bool>> match);
    }
}
