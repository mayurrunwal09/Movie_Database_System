using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.DirectorServices
{
    public class DirectorService : IDirectorService
    {
        #region Constructor and private variables
        private readonly IRepository<Director> _repository;
        public DirectorService(IRepository<Director> repository)
        {
            _repository = repository;
        }
        #endregion


        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Director student = await _repository.GetById(id);
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
        public Task<Director> Find(Expression<Func<Director, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion

        #region GetAll
        public async Task<ICollection<DirectorViewModel>> GetAll()
        {
            ICollection<DirectorViewModel> orderViewModels = new List<DirectorViewModel>();
            ICollection<Director> orders = await _repository.GetAll();
            foreach (Director order in orders)
            {
                DirectorViewModel viewModel = new()
                {
                    Id = order.Id,
                    FirstName = order.FirstName,
                    LastName = order.LastName,
                    DOB = order.DOB,



                };
                orderViewModels.Add(viewModel);
            }
            return orderViewModels;
        }
        #endregion

        #region GetById
        public async Task<DirectorViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                DirectorViewModel viewModel = new()
                {
                    Id = result.Id,
                    FirstName = result.FirstName,
                    LastName = result.LastName,
                    DOB = result.DOB,


                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<DirectorViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                DirectorViewModel viewModel = new()
                {
                    Id = result.Id,
                    FirstName = result.FirstName,
                    LastName = result.LastName,
                    DOB = result.DOB,


                };
                return viewModel;
            }
        }
        #endregion

        public Director GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertDirector inserFood)
        {
            Director student = new()
            {
                FirstName = inserFood.FirstName,
                LastName = inserFood.LastName,

                DOB = inserFood.DOB,
            };
            return _repository.Insert(student);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateDirector StudentUpdateModel)
        {
            Director student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {
                student.Id = StudentUpdateModel.Id;
                student.FirstName = StudentUpdateModel.FirstName;
                student.LastName = StudentUpdateModel.LastName;
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
