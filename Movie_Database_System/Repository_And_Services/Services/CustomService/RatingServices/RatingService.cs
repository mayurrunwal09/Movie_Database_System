/*using Domain.Model;
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

namespace Repository_And_Services.Services.CustomService.RatingServices
{
    public class RatingService : IRatingService
    {
        private readonly IRepository<Rating> _repository;
        private readonly MainDBContext _dbContext;
        public RatingService(IRepository<Rating> repository, MainDBContext mainDBContext)
        {
            _repository = repository;
            _dbContext = mainDBContext;
        }
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Rating reviewer = await _repository.GetById(id);
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

        public Task<Rating> Find(Expression<Func<Rating, bool>> match)
        {
            return _repository.Find(match);
        }

        public async Task<ICollection<RatingViewModel>> GetAll()
        {
            ICollection<RatingViewModel> ratingviewmodel = new List<RatingViewModel>();
            ICollection<Rating> rating = await _dbContext.Rating
                 .Include(d => d.Movie)
                 .Include(d => d.Reviewer).ToListAsync();
            foreach (Rating reviewer in rating)
            {
                RatingViewModel viewmodel = new()
                {
                    Id = reviewer.Id,
                    ReviewerId = reviewer.ReviewerId,
                    MovieId = reviewer.MovieId,
                    ReviewerStar = reviewer.ReviewerStar,
                    No_Of_Ratings = reviewer.No_Of_Ratings,
                    Movie_Title = reviewer.Movie?.Title,
                    Reviewer_Name = reviewer.Reviewer?.Name,
                    FeedBack = reviewer.FeedBack,

                };
                ratingviewmodel.Add(viewmodel);
            }
            return ratingviewmodel;
        }

        public async Task<RatingViewModel> GetById(int id)
        {
            var result = await _dbContext.Rating.Include(d => d.Movie)
                .Include(d => d.Reviewer).FirstOrDefaultAsync(d => d.Id == id);
            if (result == null)
            {
                return null;
            }
            else
            {
                RatingViewModel ratingViewModel = new()
                {
                    Id = result.Id,
                    ReviewerId = result.ReviewerId,
                    MovieId = result.MovieId,
                    ReviewerStar = result.ReviewerStar,
                    No_Of_Ratings = result.No_Of_Ratings,
                    Reviewer_Name = result.Reviewer?.Name,
                    Movie_Title = result.Movie?.Title,
                    FeedBack = result.FeedBack,
                };
                return ratingViewModel;
            }
        }

        public async Task<RatingViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                RatingViewModel ratingViewModel = new()
                {
                    Id = result.Id,
                    ReviewerId = result.ReviewerId,
                    MovieId = result.MovieId,
                    ReviewerStar = result.ReviewerStar,
                    No_Of_Ratings = result.No_Of_Ratings,
                    FeedBack = result.FeedBack,
                };
                return ratingViewModel;
            }
        }

        public Rating GetLast()
        {
            return _repository.GetLast();
        }

        public async Task<bool> Insert(InsertRating inserFood)
        {

            Rating rating = new()
            {
                MovieId = inserFood.MovieId,
                ReviewerId = inserFood.ReviewerId,
                ReviewerStar = inserFood.ReviewerStar,
                No_Of_Ratings = inserFood.No_Of_Ratings,
                FeedBack = inserFood.FeedBack,
            };
            return await  _repository.Insert(rating);
        }

        public async Task<bool> Update(UpdateRating StudentUpdateModel)
        {
            Rating rating = await _repository.GetById(StudentUpdateModel.Id);
            if (rating != null)
            {
                rating.Id = StudentUpdateModel.Id;
                rating.ReviewerId = StudentUpdateModel.ReviewerId;
                rating.MovieId = StudentUpdateModel.MovieId;
                rating.ReviewerStar = StudentUpdateModel.ReviewerStar;
                rating.No_Of_Ratings = StudentUpdateModel.No_Of_Ratings;
                rating.FeedBack = StudentUpdateModel.FeedBack;

                var result = await _repository.Update(rating);
                return result;
            }
            else
            {
                return false;
            }
        }
        public async Task<int> GetTotalRatingsByMovieId(int movieId)
        {

            var totalRatings = await _dbContext.Rating.CountAsync(r => r.MovieId == movieId);

            return totalRatings;
        }
        public async Task<double?> GetAverageRatingByMovieId(int movieId)
        {

            var ratings = await _dbContext.Rating
                .Where(r => r.MovieId == movieId)
                .ToListAsync();

            if (ratings.Any())
            {

                var averageRating = ratings.Average(r => r.ReviewerStar);
                return averageRating;
            }
            else
            {
                return null;
            }
        }
        public async Task<List<FeedBackViewModel>> GetAllFeedbackByMovieId(int movieId)
        {
            var feedbackList = await _dbContext.Rating
                .Where(r => r.MovieId == movieId && !string.IsNullOrEmpty(r.FeedBack))
                .Select(r => new FeedBackViewModel
                {
                    ReviewerName = r.Reviewer != null ? r.Reviewer.Name : null,
                    Feedback = r.FeedBack,
                    ReviewerStar = r.ReviewerStar,
                })
                .ToListAsync();

            return feedbackList;
        }
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

namespace Repository_And_Services.Services.CustomService.RatingServices
{
    public class RatingService : IRatingService
    {
        private readonly IRepository<Rating> _repository;
        private readonly MainDBContext _dbContext;
        public RatingService(IRepository<Rating> repository, MainDBContext mainDBContext)
        {
            _repository = repository;
            _dbContext = mainDBContext;
        }
        public async Task<bool> Delete(int id)
        {
            if (id != null)
            {
                Rating reviewer = await _repository.GetById(id);
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

        public Task<Rating> Find(Expression<Func<Rating, bool>> match)
        {
            return _repository.Find(match);
        }

        public async Task<ICollection<RatingViewModel>> GetAll()
        {
            ICollection<RatingViewModel> ratingviewmodel = new List<RatingViewModel>();
            ICollection<Rating> rating = await _dbContext.Rating
                 .Include(d => d.Movie)
                 .Include(d => d.Reviewer).ToListAsync();
            foreach (Rating reviewer in rating)
            {
                RatingViewModel viewmodel = new()
                {
                    Id = reviewer.Id,
                    ReviewerId = reviewer.ReviewerId,
                    MovieId = reviewer.MovieId,
                    ReviewerStar = reviewer.ReviewerStar,
                    No_Of_Ratings = reviewer.No_Of_Ratings,
                    Movie_Title = reviewer.Movie?.Title,
                    Reviewer_Name = reviewer.Reviewer?.Name,
                    FeedBack = reviewer.FeedBack,

                };
                ratingviewmodel.Add(viewmodel);
            }
            return ratingviewmodel;
        }

        public async Task<RatingViewModel> GetById(int id)
        {
            var result = await _dbContext.Rating.Include(d => d.Movie)
                .Include(d => d.Reviewer).FirstOrDefaultAsync(d => d.Id == id);
            if (result == null)
            {
                return null;
            }
            else
            {
                RatingViewModel ratingViewModel = new()
                {
                    Id = result.Id,
                    ReviewerId = result.ReviewerId,
                    MovieId = result.MovieId,
                    ReviewerStar = result.ReviewerStar,
                    No_Of_Ratings = result.No_Of_Ratings,
                    Reviewer_Name = result.Reviewer?.Name,
                    Movie_Title = result.Movie?.Title,
                    FeedBack = result.FeedBack,
                };
                return ratingViewModel;
            }
        }

        public async Task<RatingViewModel> GetByName(string name)
        {
            var result = await _repository.GetByName(name);
            if (result == null)
            {
                return null;
            }
            else
            {
                RatingViewModel ratingViewModel = new()
                {
                    Id = result.Id,
                    ReviewerId = result.ReviewerId,
                    MovieId = result.MovieId,
                    ReviewerStar = result.ReviewerStar,
                    No_Of_Ratings = result.No_Of_Ratings,
                    FeedBack = result.FeedBack,
                };
                return ratingViewModel;
            }
        }

        public Rating GetLast()
        {
            return _repository.GetLast();
        }

        public async Task<bool> Insert(InsertRating inserFood)
        {
            var movie = await _dbContext.Movies.FirstOrDefaultAsync(d => d.Title == inserFood.Title);
            var genres = await _dbContext.Reviewers.FirstOrDefaultAsync(d => d.Name == inserFood.Name);
            Rating rating = new()
            {
                MovieId = movie.Id,
                ReviewerId = genres.Id,
                ReviewerStar = inserFood.ReviewerStar,
                No_Of_Ratings = inserFood.No_Of_Ratings,
                FeedBack = inserFood.FeedBack,
            };
            return await _repository.Insert(rating);
        }

        public async Task<bool> Update(UpdateRating StudentUpdateModel)
        {
            Rating rating = await _repository.GetById(StudentUpdateModel.Id);
            if (rating != null)
            {
                rating.Id = StudentUpdateModel.Id;
                rating.ReviewerId = StudentUpdateModel.ReviewerId;
                rating.MovieId = StudentUpdateModel.MovieId;
                rating.ReviewerStar = StudentUpdateModel.ReviewerStar;
                rating.No_Of_Ratings = StudentUpdateModel.No_Of_Ratings;
                rating.FeedBack = StudentUpdateModel.FeedBack;

                var result = await _repository.Update(rating);
                return result;
            }
            else
            {
                return false;
            }
        }
        public async Task<int> GetTotalRatingsByMovieId(int movieId)
        {

            var totalRatings = await _dbContext.Rating.CountAsync(r => r.MovieId == movieId);

            return totalRatings;
        }
        public async Task<double?> GetAverageRatingByMovieId(int movieId)
        {

            var ratings = await _dbContext.Rating
                .Where(r => r.MovieId == movieId)
                .ToListAsync();

            if (ratings.Any())
            {

                var averageRating = ratings.Average(r => r.ReviewerStar);
                return averageRating;
            }
            else
            {
                return null;
            }
        }
        public async Task<List<FeedBackViewModel>> GetAllFeedbackByMovieId(int movieId)
        {
            var feedbackList = await _dbContext.Rating
                .Where(r => r.MovieId == movieId && !string.IsNullOrEmpty(r.FeedBack))
                .Select(r => new FeedBackViewModel
                {
                    ReviewerName = r.Reviewer != null ? r.Reviewer.Name : null,
                    Feedback = r.FeedBack,
                    ReviewerStar = r.ReviewerStar,
                })
                .ToListAsync();

            return feedbackList;
        }
    }
}
