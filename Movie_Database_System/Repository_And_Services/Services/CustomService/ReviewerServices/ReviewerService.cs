using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.ReviewerServices
{
    public class ReviewerService : IReviewerService
    {
        private readonly IRepository<Reviewer> _repository;
        public ReviewerService(IRepository<Reviewer> repository)
        {
            _repository = repository;
        }

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Reviewer reviewer = await _repository.GetById(id);
                if (reviewer != null)
                {
                    return await _repository.Delete(reviewer);
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        #endregion

        #region Find
        public Task<Reviewer> Find(Expression<Func<Reviewer, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion

        #region GetAll
        public async Task<ICollection<ReviewerViewModel>> GetAll()
        {
            ICollection<ReviewerViewModel> reviewerViewModels = new List<ReviewerViewModel>();
            ICollection<Reviewer> reviewers = await _repository.GetAll();
            foreach (Reviewer reviewer in reviewers)
            {
                ReviewerViewModel viewmodel = new()
                {
                    Id = reviewer.Id,
                    Name = reviewer.Name,
                    DOB = reviewer.DOB,
                    Address = reviewer.Address,
                    Country = reviewer.Country,
                    State = reviewer.State,
                    City = reviewer.City,
                    PinCode = reviewer.PinCode,
                    Mobileno = reviewer.Mobileno,
                };
                reviewerViewModels.Add(viewmodel);
            }
            return reviewerViewModels;
        }
        #endregion

        #region GetById
        public async Task<ReviewerViewModel> GetById(int id)
        {
            var reviewer = await _repository.GetById(id);
            if (reviewer == null)
            {
                return null;
            }
            else
            {
                ReviewerViewModel viewModel = new()
                {
                    Id = reviewer.Id,
                    Name = reviewer.Name,
                    DOB = reviewer.DOB,
                    Address = reviewer.Address,
                    Country = reviewer.Country,
                    State = reviewer.State,
                    City = reviewer.City,
                    PinCode = reviewer.PinCode,
                    Mobileno = reviewer.Mobileno,
                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<ReviewerViewModel> GetByName(string name)
        {
            var reviewer = await _repository.GetByName(name);
            if (reviewer == null)
            {
                return null;
            }
            else
            {
                ReviewerViewModel viewModel = new()
                {
                    Id = reviewer.Id,
                    Name = reviewer.Name,
                    DOB = reviewer.DOB,
                    Address = reviewer.Address,
                    Country = reviewer.Country,
                    State = reviewer.State,
                    City = reviewer.City,
                    PinCode = reviewer.PinCode,
                    Mobileno = reviewer.Mobileno,
                };
                return viewModel;
            }
        }
        #endregion

        public Reviewer GetLast()
        {
            throw new NotImplementedException();
        }

        #region insert
        public Task<bool> Insert(InsertReviewer inserFood)
        {
            Reviewer student = new()
            {
                Name = inserFood.Name,
                DOB = inserFood.DOB,
                Address = inserFood.Address,
                Country = inserFood.Country,
                State = inserFood.State,
                City = inserFood.City,
                PinCode = inserFood.PinCode,
                Mobileno = inserFood.Mobileno,

            };
            return _repository.Insert(student);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateReviewer StudentUpdateModel)
        {
            Reviewer student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {

                student.Id = StudentUpdateModel.Id;
                student.Name = StudentUpdateModel.Name;
                student.DOB = StudentUpdateModel.DOB;
                student.Address = StudentUpdateModel.Address;
                student.Country = StudentUpdateModel.Country;
                student.State = StudentUpdateModel.State;
                student.City = StudentUpdateModel.City;
                student.PinCode = StudentUpdateModel.PinCode;
                student.Mobileno = StudentUpdateModel.Mobileno;

                var result = await _repository.Update(student);
                return result;
            }
            else
            {
                return false;
            }
        }
        #endregion
    }
}
