using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.DirectorServices
{
    public  interface IDirectorService
    {

        Task<ICollection<DirectorViewModel>> GetAll();
        Task<DirectorViewModel> GetById(int id);
        Task<DirectorViewModel> GetByName(string name);
        Director GetLast();
        Task<bool> Insert(InsertDirector inserFood);
        Task<bool> Update(UpdateDirector StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Director> Find(Expression<Func<Director, bool>> match);

    }
}
