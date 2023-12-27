




using Domain.Model;
using Domain.ViewModel;
using Microsoft.EntityFrameworkCore;
using Repository_And_Services.Context;
using Repository_And_Services.Repository;
using Repository_And_Services.Services.CustomService.MovieCastServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieDirectionServices
{
    public class MovieDirectionService : IMovieDirectionService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie_Direction> _repository;
        private MainDBContext _dbContext;
        public MovieDirectionService(IRepository<Movie_Direction> repository,MainDBContext context)
        {
            _repository = repository;
            _dbContext = context;
        }
        #endregion

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Direction student = await _repository.GetById(id);
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
        public Task<Movie_Direction> Find(Expression<Func<Movie_Direction, bool>> match)
        {
           return _repository.Find(match);
        }
        #endregion


        #region GetAll
        public async Task<ICollection<MovieDirectionViewModel>> GetAll()
        {
            ICollection<MovieDirectionViewModel> orderViewModels = new List<MovieDirectionViewModel>();

           
            ICollection<Movie_Direction> orders = await _dbContext.movie_Directions
                .Include(md => md.Directors)
                .Include(md => md.Movie)
                .ToListAsync();

            foreach (Movie_Direction order in orders)
            {
                MovieDirectionViewModel viewModel = new()
                {
                    Id = order.Id,
                    DirectorId = order.DirectorId,
                    DirectorFirstName = order.Directors?.FirstName, 
                    DirectorLastName = order.Directors?.LastName,
                    MovieId = order.MovieId,
                    Title = order.Movie?.Title, 
                };
                orderViewModels.Add(viewModel);
            }

            return orderViewModels;
        }
        #endregion


        #region GetById
        public async Task<MovieDirectionViewModel> GetById(int id)
        {
          var res = await _dbContext.movie_Directions
                .Include(d=>d.Directors)
                .Include(d=>d.Movie)
                .FirstOrDefaultAsync(d=>d.Id==id);

            if (res == null)
            {
                return null;
            }
            else
            {
                MovieDirectionViewModel viewmodel = new()
                {
                    Id = res.Id,
                    DirectorId = res.DirectorId,
                    MovieId = res.MovieId,
                    DirectorFirstName = res.Directors?.FirstName,
                    DirectorLastName = res.Directors?.LastName,
                    Title = res.Movie?.Title,
                };
                return viewmodel;   
            }
        }
        #endregion


        #region GetByName
        public async Task<MovieDirectionViewModel> GetByName(string name)
        {
            var res = await _repository.GetByName(name);
            if(res == null)
            {
                return null;
            }
            else
            {
                MovieDirectionViewModel model = new()
                {
                    Id = res.Id,
                    DirectorId = res.DirectorId,
                    MovieId = res.MovieId,

                };
                return model;
            }
        }
        #endregion
        public Movie_Direction GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public async Task<bool> Insert(InsertMovieDirection inserFood)
        {
            Director director = await _dbContext.Directors
         .FirstOrDefaultAsync(d => d.FirstName == inserFood.DirectorFirstName);

            if (director == null)
            {
               
                return false;
            }
          
            Movie movie = await _dbContext.Movies
                .FirstOrDefaultAsync(m => m.Title == inserFood.Title);

            if (movie == null)
            {
               
                return false;
            }

            Movie_Direction movie_Direction = new()
            {
                DirectorId = director.Id,
                MovieId = movie.Id,
            };

            return await _repository.Insert(movie_Direction);

        }
        #endregion


        #region Update
        public async Task<bool> Update(UpdateMovieDirection StudentUpdateModel)
        {
            Movie_Direction movie_Direction = await _repository.GetById(StudentUpdateModel.Id);
            if (movie_Direction != null)
            {
                movie_Direction.Id = StudentUpdateModel.Id;
                movie_Direction.DirectorId = StudentUpdateModel.DirectorId;
                movie_Direction.MovieId = StudentUpdateModel.MovieId;

                var result = await _repository.Update(movie_Direction);
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
