using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.ReviewerServices
{
    public  interface IReviewerService
    {
        Task<ICollection<ReviewerViewModel>> GetAll();
        Task<ReviewerViewModel> GetById(int id);
        Task<ReviewerViewModel> GetByName(string name);
        Reviewer GetLast();
        Task<bool> Insert(InsertReviewer inserFood);
        Task<bool> Update(UpdateReviewer StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Reviewer> Find(Expression<Func<Reviewer, bool>> match);
    }
}
