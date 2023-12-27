using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository_And_Services.Context;
using Repository_And_Services.Services.CustomService.ActorServices;
using Repository_And_Services.Services.CustomService.DirectorServices;
using Repository_And_Services.Services.CustomService.GenresServices;
using Repository_And_Services.Services.CustomService.MovieServices;
using Repository_And_Services.Services.CustomService.RatingServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConditionController : ControllerBase
    {
        private readonly MainDBContext _dbContext;
        private readonly IMovieService _movieService;
        private readonly IActorService _actorService;
        private readonly IDirectorService _DirectorService;
        private readonly IGenresService _GenresService;
        private readonly IRatingService _RatingService;

        public ConditionController(MainDBContext dbContext, IRatingService RatingService, IMovieService movieService, IActorService actorService, IDirectorService directorService, IGenresService genresService)
        {
            _dbContext = dbContext;
            _movieService = movieService;
            _actorService = actorService;
            _DirectorService = directorService;
            _GenresService = genresService;
            _RatingService = RatingService;
        }
        [HttpGet("GetActorDetailsByName")]
        public IActionResult GetActorDetailsByName(string actorName)
        {

            if (string.IsNullOrEmpty(actorName))
            {
                return BadRequest("Actor name cannot be null or empty.");
            }


            var actorDetails = _dbContext.Actors
                .Include(a => a.MoviesCast)
                    .ThenInclude(mc => mc.Movie)
                .FirstOrDefault(a => (a.FirstName + " " + a.LastName) == actorName);

            if (actorDetails == null)
            {
                return NotFound("Actor not found.");
            }


            var actorDetailsDto = new
            {
                actorDetails.FirstName,
                actorDetails.LastName,
                actorDetails.Gender,
                actorDetails.DOB,
                Movies = actorDetails.MoviesCast.Select(mc => mc.Movie.Title)
            };

            return Ok(actorDetailsDto);
        }

        [HttpGet("GetDirectorDetailsByName")]
        public IActionResult GetDirectorDetailsByName(string actorName)
        {

            if (string.IsNullOrEmpty(actorName))
            {
                return BadRequest("Director name cannot be null or empty.");
            }


            var actorDetails = _dbContext.Directors
                .Include(a => a.Movie_Directions)
                    .ThenInclude(mc => mc.Movie)
                .FirstOrDefault(a => (a.FirstName + " " + a.LastName) == actorName);

            if (actorDetails == null)
            {
                return NotFound("Actor not found.");
            }

          
            var actorDetailsDto = new
            {
                actorDetails.FirstName,
                actorDetails.LastName,

                actorDetails.DOB,
                Movies = actorDetails.Movie_Directions.Select(mc => mc.Movie.Title)
            };

            return Ok(actorDetailsDto);
        }

        [HttpGet("GetMovieDetailsByName")]
        public IActionResult GetMovieDetailsByName(string movieName)
        {
            if (string.IsNullOrEmpty(movieName))
            {
                return BadRequest("Movie name cannot be null or empty.");
            }

            var movieDetails = _dbContext.Movies
                .Include(m => m.MovieGenres)
                    .ThenInclude(mg => mg.Genres)
                .Include(m => m.MovieDirection)
                    .ThenInclude(md => md.Directors)
                .Include(m => m.Ratings)
                    .ThenInclude(r => r.Reviewer)
                .Include(m => m.MovieCasts)
                    .ThenInclude(mc => mc.Actor)
                .FirstOrDefault(m => m.Title == movieName);

            if (movieDetails == null)
            {
                return NotFound("Movie not found.");
            }

            var Ratings = _RatingService.GetAverageRatingByMovieId(movieDetails.Id).Result;
            var totalfeedback = _RatingService.GetTotalRatingsByMovieId(movieDetails.Id).Result;

            var movieDetailsDto = new
            {
                movieDetails.Title,
                movieDetails.MovieYear,
                movieDetails.MovieTime,
                movieDetails.MovieLanguage,
                movieDetails.ReleaseDate,
                movieDetails.Movie_Relase_Country,
                Genres = movieDetails.MovieGenres.Select(g => g.Genres.Gen_Title),
                Directors = movieDetails.MovieDirection.Select(d => $"{d.Directors.FirstName} {d.Directors.LastName}"),
              
                Cast = movieDetails.MovieCasts.Select(c => new { c.Actor.FirstName, c.Actor.LastName, c.Role }),
                MovieRatings = Ratings,
                TotalReviews = totalfeedback,
                // FeedBack = movieDetails.Ratings.Select(r => new { r.Reviewer.Name, r.FeedBack, r.ReviewerStar }),
               
            };

            return Ok(movieDetailsDto);
        }
        [Route("GetAllFeedbackByMovieId")]
        [HttpGet]
        public async Task<IActionResult> GetAllFeedbackByMovieId(int movieId)
        {
            if (movieId != null)
            {
                var feedbackList = await _RatingService.GetAllFeedbackByMovieId(movieId);

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
        [HttpGet("GetAllFeedbackByMovieName")]
        public IActionResult GetAllFeedbackByMovieName(string movieName)
        {
            if (string.IsNullOrEmpty(movieName))
            {
                return BadRequest("Movie name cannot be null or empty.");
            }

            var movieDetails = _dbContext.Movies
                .Include(m => m.Ratings)
                    .ThenInclude(r => r.Reviewer)
                .FirstOrDefault(m => m.Title == movieName);

            if (movieDetails == null)
            {
                return NotFound("Movie not found.");
            }

            var feedbackList = _RatingService.GetAllFeedbackByMovieId(movieDetails.Id).Result;

            var feedbackDto = feedbackList.Select(feedback => new
            {
                MovieName = movieDetails.Title,
                ReviewerName = feedback.ReviewerName != null ? feedback.ReviewerName : null,
                Feedback = feedback.Feedback,
                ReviewerStar = feedback.ReviewerStar
            });

            return Ok(feedbackDto);
        }



        [HttpGet("GetMoviesByGenreName")]
        public IActionResult GetMoviesByGenreName(string genre)
        {
            if (string.IsNullOrEmpty(genre))
            {
                return BadRequest("Genre cannot be null or empty.");
            }

            var moviesByGenre = _dbContext.Movies
                .Include(m => m.MovieGenres)
                    .ThenInclude(mg => mg.Genres)
                .Where(m => m.MovieGenres.Any(mg => mg.Genres.Gen_Title.ToLower() == genre.ToLower()))
                .Select(m => new
                {
                    m.Title,
                    m.MovieYear,
                    m.MovieTime,
                    m.MovieLanguage,
                    m.ReleaseDate,
                    m.Movie_Relase_Country
                });

            if (!moviesByGenre.Any())
            {
                return NotFound($"No movies found for the genre '{genre}'.");
            }

            return Ok(moviesByGenre);
        }


    }
}
