using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using Repository_And_Services.Services.CustomService.RatingServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly IRatingService _ratingService;
        public RatingController(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }
        [Route("GetAllRatings")]
        [HttpGet]
        public async Task<IActionResult> GetAllRatings()
        {
            var result = await _ratingService.GetAll();
            if (result == null)
                return BadRequest("No Record Found");
            return Ok(result);
        }

        [Route("GetRatingsById")]
        [HttpGet]
        public async Task<IActionResult> GetRatingsById(int Id)
        {
            if (Id != null)
            {
                var result = await _ratingService.GetById(Id);
                if (result == null)
                    return BadRequest("No record found");
                return Ok(result);
            }
            else
            {
                return NotFound("Invalid Id");
            }
        }

        [Route("InsertRating")]
        [HttpPost]
        public async Task<IActionResult> InsertRating(InsertRating insertRating)
        {
            if (ModelState.IsValid)
            {
                var result = await _ratingService.Insert(insertRating);
                if (result == true)
                    return Ok("Ratings inserted successfuly");
                else
                    return BadRequest("Data is not inserted");
            }
            else
            {
                return BadRequest("Model state is not valid");
            }
        }
        [Route("UpdateRating")]
        [HttpPut]
        public async Task<IActionResult> UpdateRating(UpdateRating updateRating)
        {
            if (ModelState.IsValid)
            {
                var result = await _ratingService.Update(updateRating);
                if (result == true)
                    return Ok("Rating updated");
                else
                    return BadRequest("Rating is not updated,Something went wrong");
            }
            else
            {
                return BadRequest("Modelstate is not valid");
            }
        }
        [Route("DeleteRating")]
        [HttpDelete]
        public async Task<IActionResult> DeleteRating(int id)
        {
            var result = await _ratingService.Delete(id);
            if (result == true)
                return Ok("Rating deleted sucessfully");
            else
                return BadRequest("Rating is not deleted");
        }
        [Route("GetTotalRatingsByMovieId")]
        [HttpGet]
        public async Task<IActionResult> GetTotalRatingsByMovieId(int movieId)
        {
            if (movieId != null)
            {
                // Call a service method to calculate the total number of ratings for the given movieId
                var result = await _ratingService.GetTotalRatingsByMovieId(movieId);

                if (result == null)
                    return BadRequest("No record found");

                return Ok(result);
            }
            else
            {
                return NotFound("Invalid Movie Id");
            }
        }

        [Route("GetAverageRatingByMovieId")]
        [HttpGet]
        public async Task<IActionResult> GetAverageRatingByMovieId(int movieId)
        {
            if (movieId != null)
            {
                var averageRating = await _ratingService.GetAverageRatingByMovieId(movieId);

                if (averageRating.HasValue)
                    return Ok(averageRating);
                else
                    return BadRequest("No ratings available for the movie");
            }
            else
            {
                return NotFound("Invalid Movie Id");
            }
        }

        [Route("GetAllFeedbackByMovieId")]
        [HttpGet]
        public async Task<IActionResult> GetAllFeedbackByMovieId(int movieId)
        {
            if (movieId != null)
            {
                var feedbackList = await _ratingService.GetAllFeedbackByMovieId(movieId);

                if (feedbackList.Any())
                    return Ok(feedbackList);
                else
                    return BadRequest("No feedback available for the movie");
            }
            else
            {
                return NotFound("Invalid Movie Id");
            }
        }


    }
}
