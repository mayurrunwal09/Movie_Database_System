/*using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieCastServices
{
    public class MovieCastService : IMovieCastService
    {
        #region Construstor and private variables
        private readonly IRepository<Movie_Cast> _repository;
        public MovieCastService(IRepository<Movie_Cast> repository)
        {
            _repository = repository;
        }
        #endregion

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Cast student = await _repository.GetById(id);
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
        public Task<Movie_Cast> Find(Expression<Func<Movie_Cast, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion


        #region GetAll
        public async Task<ICollection<MovieCastViewModel>> GetAll()
        {
            ICollection<MovieCastViewModel> orderViewModels = new List<MovieCastViewModel>();
            ICollection<Movie_Cast> orders = await _repository.GetAll();
            foreach (Movie_Cast order in orders)
            {
                MovieCastViewModel viewModel = new()
                {
                    Id = order.Id,
                    MovieId = order.MovieId,
                    ActorId = order.ActorId,
                    Role = order.Role,

                };
                orderViewModels.Add(viewModel);
            }
            return orderViewModels;
        }
        #endregion


        #region GetById
        public async Task<MovieCastViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                MovieCastViewModel viewModel = new()
                {
                    Id = result.Id,
                    MovieId = result.MovieId,
                    ActorId = result.ActorId,
                    Role = result.Role,


                };
                return viewModel;
            }
        }
        #endregion GetById

        #region GetByName
        public async Task<MovieCastViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                MovieCastViewModel viewModel = new()
                {
                    Id = result.Id,
                    MovieId = result.MovieId,
                    ActorId = result.ActorId,
                    Role = result.Role,


                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Cast GetLast()
        {
            throw new NotImplementedException();
        }
        #region Insert
        public Task<bool> Insert(InsertMovieCast inserFood)
        {
            Movie_Cast student = new()
            {
                MovieId = inserFood.MovieId,
                ActorId = inserFood.ActorId,
                Role = inserFood.Role,
            };
            return _repository.Insert(student);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviecast StudentUpdateModel)
        {

            Movie_Cast student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {
                student.Id = StudentUpdateModel.Id;
                student.MovieId = StudentUpdateModel.MovieId;
                student.ActorId = StudentUpdateModel.ActorId;
                student.Role = StudentUpdateModel.Role;

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

*/






using Domain.Model;
using Domain.ViewModel;
using Microsoft.EntityFrameworkCore;
using Repository_And_Services.Context;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieCastServices
{
    public class MovieCastService : IMovieCastService
    {
        #region Construstor and private variables
        private readonly IRepository<Movie_Cast> _repository;
        private readonly MainDBContext _dbContext;
        public MovieCastService(IRepository<Movie_Cast> repository, MainDBContext dbContext)
        {
            _repository = repository;
            _dbContext = dbContext;
        }
        #endregion

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Cast student = await _repository.GetById(id);
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
        public Task<Movie_Cast> Find(Expression<Func<Movie_Cast, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion


        #region GetAll
        public async Task<ICollection<MovieCastViewModel>> GetAll()
        {
            ICollection<MovieCastViewModel> orderViewModels = new List<MovieCastViewModel>();
            ICollection<Movie_Cast> orders = await _dbContext.movie_Casts
                .Include(mc => mc.Actor)
                .Include(mc => mc.Movie)
                .ToListAsync();

            foreach (Movie_Cast order in orders)
            {
                MovieCastViewModel viewModel = new()
                {
                    Id = order.Id,
                    Role = order.Role,
                    ActorId = order.ActorId,
                    FirstName = order.Actor?.FirstName,
                    LastName = order.Actor?.LastName,
                    MovieId = order.MovieId,
                    Title = order.Movie?.Title,
                };

                orderViewModels.Add(viewModel);
            }

            return orderViewModels;
        }
        #endregion


        #region GetById
        public async Task<MovieCastViewModel> GetById(int id)
        {
            var result = await _dbContext.movie_Casts
                 .Include(c => c.Actor)
                 .Include(c => c.Movie)
                 .FirstOrDefaultAsync(c => c.Id == id);
            if(result == null)
            {
                return null;
            }
            else
            {
                MovieCastViewModel resultViewModel = new()
                {
                    Id = result.Id,
                    Role = result.Role,
                    ActorId = result.ActorId,
                    FirstName = result.Actor?.FirstName,
                    LastName = result.Actor?.LastName,
                    Title = result.Movie?.Title,
                };
                return resultViewModel;
            }
        }
        #endregion GetById

        #region GetByName
        public async Task<MovieCastViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                MovieCastViewModel viewModel = new()
                {
                    Id = result.Id,
                    MovieId = result.MovieId,
                    ActorId = result.ActorId,
                    Role = result.Role,


                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Cast GetLast()
        {
            throw new NotImplementedException();
        }
        #region Insert
        public async Task<bool> Insert(InsertMovieCast inserFood)
        {
            Movie movie = await _dbContext.Movies.FirstOrDefaultAsync(m => m.Title == inserFood.MovieTitleName);
            if (movie == null)
            {
               
                return false;
            }

           
            Actor actor = await _dbContext.Actors.FirstOrDefaultAsync(a => a.FirstName == inserFood.ActorFirstName);
            if (actor == null)
            {
                
                return false;
            }

            Movie_Cast movieCast = new()
            {
                MovieId = movie.Id,
                ActorId = actor.Id,
                Role = inserFood.Role,
            };

            return await _repository.Insert(movieCast);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviecast StudentUpdateModel)
        {

            Movie_Cast student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {
                student.Id = StudentUpdateModel.Id;
                student.MovieId = StudentUpdateModel.MovieId;
                student.ActorId = StudentUpdateModel.ActorId;
                student.Role = StudentUpdateModel.Role;

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













