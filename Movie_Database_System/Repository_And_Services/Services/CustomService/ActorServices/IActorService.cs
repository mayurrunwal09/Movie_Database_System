using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.ActorServices
{
    public  interface IActorService
    {
        Task<ICollection<ActorViewModel>> GetAll();
        Task<ActorViewModel> GetById(int id);
        Task<ActorViewModel> GetByName(string name);
        Actor GetLast();
        Task<bool> Insert(InsertActor inserFood);
        Task<bool> Update(UpdateActor StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Actor> Find(Expression<Func<Actor, bool>> match);
    }
}
