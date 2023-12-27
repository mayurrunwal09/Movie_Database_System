using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieServices
{
    public class MovieService : IMovieService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie> _repository;
        public MovieService (IRepository<Movie> repository)
        {
            _repository = repository;
        }
        #endregion

        #region Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie movie = await _repository.GetById(id);
                if (movie != null)
                {
                    return await _repository.Delete(movie); 
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
        public Task<Movie> Find(Expression<Func<Movie, bool>> match)
        {
            return _repository.Find(match);
        }
        #endregion

        #region GetAll
        public async Task<ICollection<MovieViewModel>> GetAll()
        {
            ICollection<MovieViewModel> movieViewModels = new List<MovieViewModel>();
            ICollection<Movie> movies = await _repository.GetAll();
            foreach (Movie movie in movies)
            {
                MovieViewModel viewModel = new()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    MovieYear = movie.MovieYear,
                    MovieTime = movie.MovieTime,
                    MovieLanguage = movie.MovieLanguage,
                    ReleaseDate = movie.ReleaseDate,
                    Movie_Relase_Country = movie.Movie_Relase_Country,
                };
                movieViewModels.Add(viewModel);
            }
            return movieViewModels;
        }
        #endregion

        #region GetById
        public async Task<MovieViewModel> GetById(int id)
        {
            var movie = await _repository.GetById(id);
            if (movie == null)
            {
                return null;
            }
            else
            {
                MovieViewModel viewModel = new()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    MovieYear = movie.MovieYear,
                    MovieTime = movie.MovieTime,
                    MovieLanguage = movie.MovieLanguage,
                    ReleaseDate = movie.ReleaseDate,
                    Movie_Relase_Country = movie.Movie_Relase_Country,


                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<MovieViewModel> GetByName(string name)
        {
            var movie = await _repository.GetByName(name);
            if (movie == null)
            {
                return null;
            }
            else
            {
                MovieViewModel viewModel = new()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    MovieYear = movie.MovieYear,
                    MovieTime = movie.MovieTime,
                    MovieLanguage = movie.MovieLanguage,
                    ReleaseDate = movie.ReleaseDate,
                    Movie_Relase_Country = movie.Movie_Relase_Country,


                };
                return viewModel;
            }
        }
        #endregion

        public Movie GetLast()
        {
            throw new NotImplementedException();
        }
        #region Insert
        public Task<bool> Insert(insertMovie inserFood)
        {
            Movie movie = new()
            {
                Title = inserFood.Title,
                MovieYear = inserFood.MovieYear,
                MovieTime = inserFood.MovieTime,
                MovieLanguage = inserFood.MovieLanguage,
                ReleaseDate = inserFood.ReleaseDate,
                Movie_Relase_Country = inserFood.Movie_Relase_Country,
            };
            return _repository.Insert(movie);
        }
        #endregion

        #region Update
        public async Task<bool> Update(Updatemovie StudentUpdateModel)
        {
            Movie student = await _repository.GetById(StudentUpdateModel.Id);
            if (student != null)
            {

                student.Id = StudentUpdateModel.Id;
                student.Title = StudentUpdateModel.Title;
                student.MovieYear = StudentUpdateModel.MovieYear;
                student.MovieTime = StudentUpdateModel.MovieTime;
                student.MovieLanguage = StudentUpdateModel.MovieLanguage;
                student.ReleaseDate = StudentUpdateModel.ReleaseDate;
                student.Movie_Relase_Country = StudentUpdateModel.Movie_Relase_Country;

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
