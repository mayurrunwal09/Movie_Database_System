using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.GenresServices
{
    public class GenresService : IGenresService
    {
        #region Constructor and private variables
        private readonly IRepository<Genres> _repository;
        public GenresService(IRepository<Genres> repository)
        {
            _repository = repository;
        }
        #endregion

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Genres student = await _repository.GetById(id);
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
        public Task<Genres> Find(Expression<Func<Genres, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion

        #region GetAll
        public async Task<ICollection<GenresViewModel>> GetAll()
        {
            ICollection<GenresViewModel> orderViewModels = new List<GenresViewModel>();
            ICollection<Genres> orders = await _repository.GetAll();
            foreach (Genres order in orders)
            {
                GenresViewModel viewModel = new()
                {
                    Id = order.Id,
                    Gen_Title = order.Gen_Title,



                };
                orderViewModels.Add(viewModel);
            }
            return orderViewModels;
        }
        #endregion

        #region GetById
        public async Task<GenresViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                GenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    Gen_Title = result.Gen_Title,


                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<GenresViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                GenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    Gen_Title = result.Gen_Title,


                };
                return viewModel;
            }
        }
        #endregion

        public Genres GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertGenres inserFood)
        {
            Genres student = new()
            {
                Gen_Title = inserFood.Gen_Title,
            };
            return _repository.Insert(student);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateGenres StudentUpdateModel)
        {

            Genres student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {
                student.Id = StudentUpdateModel.Id;
                student.Gen_Title = StudentUpdateModel.Gen_Title;

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
