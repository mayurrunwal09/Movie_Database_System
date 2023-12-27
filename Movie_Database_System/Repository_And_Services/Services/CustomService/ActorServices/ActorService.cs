using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.ActorServices
{
    public class ActorService : IActorService
    {
        #region Constructor and private variables

        private readonly IRepository<Actor> _repository;
        public ActorService(IRepository<Actor> repository)
        {
            _repository = repository;
        }
        #endregion

        #region  Delete 
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Actor student = await _repository.GetById(id);
                if (student != null)
                {
                    return await _repository.Delete(student);
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
        public Task<Actor> Find(Expression<Func<Actor, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion

        #region GetAll
        public async Task<ICollection<ActorViewModel>> GetAll()
        {
            ICollection<ActorViewModel> orderViewModels = new List<ActorViewModel>();
            ICollection<Actor> orders = await _repository.GetAll();
            foreach (Actor order in orders)
            {
                ActorViewModel viewModel = new()
                {
                    Id = order.Id,
                    FirstName = order.FirstName,
                    LastName = order.LastName,
                    Gender = order.Gender,
                    DOB = order.DOB,


                };
                orderViewModels.Add(viewModel);
            }
            return orderViewModels;
        }
        #endregion

        #region GetById
        public async Task<ActorViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                ActorViewModel viewModel = new()
                {
                    Id = result.Id,
                    FirstName = result.FirstName,
                    LastName = result.LastName,
                    Gender = result.Gender,
                    DOB = result.DOB,
                };
                return viewModel;
            }
        }
        #endregion

        #region Get By Name
        public async Task<ActorViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                ActorViewModel viewModel = new()
                {
                    Id = result.Id,
                    FirstName = result.FirstName,
                    LastName = result.LastName,
                    Gender = result.Gender,
                    DOB = result.DOB,
                };
                return viewModel;
            }
        }
        #endregion

        public Actor GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertActor inserFood)
        {
            Actor student = new()
            {
                FirstName = inserFood.FirstName,
                LastName = inserFood.LastName,
                Gender = inserFood.Gender,
                DOB = inserFood.DOB,
            };
            return _repository.Insert(student);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateActor StudentUpdateModel)
        {
            Actor student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {
                student.Id = StudentUpdateModel.Id;
                student.FirstName = StudentUpdateModel.FirstName;
                student.LastName = StudentUpdateModel.LastName;
                student.Gender = StudentUpdateModel.Gender;
                student.DOB = StudentUpdateModel.DOB;

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

