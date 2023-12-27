using Domain.Model;
using Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Services.CustomService.RatingServices
{
    public interface IRatingService
    {
        Task<ICollection<RatingViewModel>> GetAll();
        Task<RatingViewModel> GetById(int id);
        Task<RatingViewModel> GetByName(string name);
        Rating GetLast();
        Task<bool> Insert(InsertRating inserFood);
        Task<bool> Update(UpdateRating StudentUpdateModel);
        Task<bool> Delete(int id);
        Task<Rating> Find(Expression<Func<Rating, bool>> match);
        Task<int> GetTotalRatingsByMovieId(int movieId);
        Task<double?> GetAverageRatingByMovieId(int movieId);
        Task<List<FeedBackViewModel>> GetAllFeedbackByMovieId(int movieId);
    }
}
