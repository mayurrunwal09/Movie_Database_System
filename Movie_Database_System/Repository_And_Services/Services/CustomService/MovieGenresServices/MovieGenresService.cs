/*using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Context;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieGenresServices
{
    public class MovieGenresService : IMovieGenresService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie_Genres> _repository;
        private readonly MainDBContext _dbContext;
        public MovieGenresService(IRepository<Movie_Genres> repository,MainDBContext context)
        {
            _repository = repository;
            _dbContext = context;
        }
        #endregion

        #region  Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Genres movie_Genres = await _repository.GetById(id);
                if (movie_Genres != null)
                {
                    return await _repository.Delete(movie_Genres);
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
        public Task<Movie_Genres> Find(Expression<Func<Movie_Genres, bool>> match)
        {
            return _repository.Find(match);
        }

        #endregion

        #region GetALL
        public async Task<ICollection<MoviegenresViewModel>> GetAll()
        {
            ICollection<MoviegenresViewModel> moviegenresViewModels = new List<MoviegenresViewModel>();
            ICollection<Movie_Genres> movie_Genres = await _repository.GetAll();
            foreach(Movie_Genres movie in movie_Genres)
            {
                MoviegenresViewModel movieViewModel = new()
                {
                    Id = movie.Id,
                    GenresId = movie.GenresId,
                    MovieId = movie.Id,
                };
                moviegenresViewModels.Add(movieViewModel);
            }
            return moviegenresViewModels;
        }
        #endregion

        #region GetById
        public async Task<MoviegenresViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id =result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<MoviegenresViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if(result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Genres GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertMoviegenres inserFood)
        {
            Movie_Genres movie_Genres = new()
            {
                GenresId=inserFood.GenresId,
                MovieId=inserFood.MovieId,
            };
            return _repository.Insert(movie_Genres);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviegenres StudentUpdateModel)
        {
            Movie_Genres movie_Genres = await _repository.GetById(StudentUpdateModel.Id);
            if(movie_Genres!= null)
            {
                movie_Genres.Id = movie_Genres.Id;
                movie_Genres.GenresId = movie_Genres.GenresId;
                movie_Genres.MovieId = movie_Genres.Id; 

                var result = await _repository.Update(movie_Genres);
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
*//*




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

namespace Repository_And_Services.Services.CustomService.MovieGenresServices
{
    public class MovieGenresService : IMovieGenresService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie_Genres> _repository;
        private readonly MainDBContext _dbContext;
        public MovieGenresService(IRepository<Movie_Genres> repository,MainDBContext context)
        {
            _repository = repository;
            _dbContext = context;
        }
        #endregion

        #region  Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Genres movie_Genres = await _repository.GetById(id);
                if (movie_Genres != null)
                {
                    return await _repository.Delete(movie_Genres);
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
        public Task<Movie_Genres> Find(Expression<Func<Movie_Genres, bool>> match)
        {
            return _repository.Find(match);
        }

        #endregion

        #region GetALL
        public async Task<ICollection<MoviegenresViewModel>> GetAll()
        {
            ICollection<MoviegenresViewModel> moviegenresViewModels = new List<MoviegenresViewModel>();
            ICollection<Movie_Genres> movie_Genres = await _dbContext.Movie_Genres
                  .Include(mg => mg.Genres)
                  .Include(mg => mg.Movie)
                  .ToListAsync();
            foreach (Movie_Genres movie in movie_Genres)
            {
                MoviegenresViewModel movieViewModel = new()
                {
                    Id = movie.Id,
                    GenresId = movie.GenresId,
                    MovieId = movie.Id,
                    MovieTitle = movie.Movie?.Title,
                    Gen_Title = movie.Genres?.Gen_Title,
                };
                moviegenresViewModels.Add(movieViewModel);
            }
            return moviegenresViewModels;
        }
        #endregion

        #region GetById
        public async Task<MoviegenresViewModel> GetById(int id)
        {
            var result = await _dbContext.Movie_Genres
                .Include(d=>d.Genres)
                .Include(d=>d.Movie).FirstOrDefaultAsync(d=>d.Id == id);
            if (result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id =result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                    Gen_Title = result.Genres?.Gen_Title,
                    MovieTitle = result.Movie?.Title,
                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<MoviegenresViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if(result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Genres GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertMoviegenres inserFood)
        {
            Movie_Genres movie_Genres = new()
            {
                GenresId=inserFood.GenresId,
                MovieId=inserFood.MovieId,
            };
            return _repository.Insert(movie_Genres);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviegenres StudentUpdateModel)
        {
            Movie_Genres movie_Genres = await _repository.GetById(StudentUpdateModel.Id);
            if(movie_Genres!= null)
            {
                movie_Genres.Id = movie_Genres.Id;
                movie_Genres.GenresId = movie_Genres.GenresId;
                movie_Genres.MovieId = movie_Genres.Id; 

                var result = await _repository.Update(movie_Genres);
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



/*using Domain.Model;
using Domain.ViewModel;
using Repository_And_Services.Context;
using Repository_And_Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.MovieGenresServices
{
    public class MovieGenresService : IMovieGenresService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie_Genres> _repository;
        private readonly MainDBContext _dbContext;
        public MovieGenresService(IRepository<Movie_Genres> repository,MainDBContext context)
        {
            _repository = repository;
            _dbContext = context;
        }
        #endregion

        #region  Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Genres movie_Genres = await _repository.GetById(id);
                if (movie_Genres != null)
                {
                    return await _repository.Delete(movie_Genres);
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
        public Task<Movie_Genres> Find(Expression<Func<Movie_Genres, bool>> match)
        {
            return _repository.Find(match);
        }

        #endregion

        #region GetALL
        public async Task<ICollection<MoviegenresViewModel>> GetAll()
        {
            ICollection<MoviegenresViewModel> moviegenresViewModels = new List<MoviegenresViewModel>();
            ICollection<Movie_Genres> movie_Genres = await _repository.GetAll();
            foreach(Movie_Genres movie in movie_Genres)
            {
                MoviegenresViewModel movieViewModel = new()
                {
                    Id = movie.Id,
                    GenresId = movie.GenresId,
                    MovieId = movie.Id,
                };
                moviegenresViewModels.Add(movieViewModel);
            }
            return moviegenresViewModels;
        }
        #endregion

        #region GetById
        public async Task<MoviegenresViewModel> GetById(int id)
        {
            var result = await _repository.GetById(id);
            if (result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id =result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<MoviegenresViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if(result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Genres GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public Task<bool> Insert(InsertMoviegenres inserFood)
        {
            Movie_Genres movie_Genres = new()
            {
                GenresId=inserFood.GenresId,
                MovieId=inserFood.MovieId,
            };
            return _repository.Insert(movie_Genres);
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviegenres StudentUpdateModel)
        {
            Movie_Genres movie_Genres = await _repository.GetById(StudentUpdateModel.Id);
            if(movie_Genres!= null)
            {
                movie_Genres.Id = movie_Genres.Id;
                movie_Genres.GenresId = movie_Genres.GenresId;
                movie_Genres.MovieId = movie_Genres.Id; 

                var result = await _repository.Update(movie_Genres);
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

namespace Repository_And_Services.Services.CustomService.MovieGenresServices
{
    public class MovieGenresService : IMovieGenresService
    {
        #region Constructor and private variables
        private readonly IRepository<Movie_Genres> _repository;
        private readonly MainDBContext _dbContext;
        public MovieGenresService(IRepository<Movie_Genres> repository, MainDBContext context)
        {
            _repository = repository;
            _dbContext = context;
        }
        #endregion

        #region  Delete
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Movie_Genres movie_Genres = await _repository.GetById(id);
                if (movie_Genres != null)
                {
                    return await _repository.Delete(movie_Genres);
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
        public Task<Movie_Genres> Find(Expression<Func<Movie_Genres, bool>> match)
        {
            return _repository.Find(match);
        }

        #endregion

        #region GetALL
        public async Task<ICollection<MoviegenresViewModel>> GetAll()
        {
            ICollection<MoviegenresViewModel> moviegenresViewModels = new List<MoviegenresViewModel>();
            ICollection<Movie_Genres> movie_Genres = await _dbContext.Movie_Genres
                  .Include(mg => mg.Genres)
                  .Include(mg => mg.Movie)
                  .ToListAsync();
            foreach (Movie_Genres movie in movie_Genres)
            {
                MoviegenresViewModel movieViewModel = new()
                {
                    Id = movie.Id,
                    GenresId = movie.GenresId,
                    MovieId = movie.Id,
                    MovieTitle = movie.Movie?.Title,
                    Gen_Title = movie.Genres?.Gen_Title,
                };
                moviegenresViewModels.Add(movieViewModel);
            }
            return moviegenresViewModels;
        }
        #endregion

        #region GetById
        public async Task<MoviegenresViewModel> GetById(int id)
        {
            var result = await _dbContext.Movie_Genres
                .Include(d => d.Genres)
                .Include(d => d.Movie).FirstOrDefaultAsync(d => d.Id == id);
            if (result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                    Gen_Title = result.Genres?.Gen_Title,
                    MovieTitle = result.Movie?.Title,
                };
                return viewModel;
            }
        }
        #endregion

        #region GetByName
        public async Task<MoviegenresViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                MoviegenresViewModel viewModel = new()
                {
                    Id = result.Id,
                    GenresId = result.GenresId,
                    MovieId = result.Id,
                };
                return viewModel;
            }
        }
        #endregion

        public Movie_Genres GetLast()
        {
            throw new NotImplementedException();
        }

        #region Insert
        public async Task<bool> Insert(InsertMoviegenres inserFood)
        {
            var movie = await _dbContext.Movies.FirstOrDefaultAsync(d => d.Title == inserFood.MovieTitle);
            var genres = await _dbContext.Genres.FirstOrDefaultAsync(d => d.Gen_Title == inserFood.Gen_Title);
            if(movie != null && genres != null)
            {
                Movie_Genres movies = new()
                {
                    MovieId = movie.Id,
                    GenresId = genres.Id,
                };
                return await _repository.Insert(movies);
            }
            else
            {
                return false;
            }
        }
        #endregion

        #region Update
        public async Task<bool> Update(UpdateMoviegenres StudentUpdateModel)
        {
            Movie_Genres movie_Genres = await _repository.GetById(StudentUpdateModel.Id);
            if (movie_Genres != null)
            {
                movie_Genres.Id = movie_Genres.Id;
                movie_Genres.GenresId = movie_Genres.GenresId;
                movie_Genres.MovieId = movie_Genres.Id;

                var result = await _repository.Update(movie_Genres);
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
