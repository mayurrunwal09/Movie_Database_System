using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.MovieServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;
        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [Route("GetAllMovies")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            var res = await _movieService.GetAll();
            if (res == null)
                return BadRequest("No Records Found");
            return Ok(res);
        }
        [Route("GetMovieById")]
        [HttpGet]
        public async Task<IActionResult> GetMovieById(int Id)
        {
            if (Id != null)
            {
                var result = await _movieService.GetById(Id);
                if (result == null)
                    return BadRequest("No Record found");
                return Ok(result);
            }
            else
            {
                return NotFound("Invalid ID");
            }
        }
        [Route("insertMovie")]
        [HttpPost]
        public async Task<IActionResult> insertMovie(insertMovie categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _movieService.Insert(categoryModel);
                if (result == true)
                    return Ok("Movie Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Movie Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Movie Information, Please Entering a Valid One...!");

        }
        [Route("Updatemovie")]
        [HttpPut]
        public async Task<IActionResult> Updatemovie(Updatemovie categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _movieService.Update(categoryModel);
                if (result == true)
                    return Ok(categoryModel);
                else
                    return BadRequest("Something Went Wrong, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Movie Information, Please Entering a Valid One...!");
        }

        [Route("DeleteMovie")]
        [HttpDelete]
        public async Task<IActionResult> DeleteMovie(int Id)
        {
            var result = await _movieService.Delete(Id);
            if (result == true)
                return Ok("Movie Deleted SUccessfully...!");
            else
                return BadRequest("Movie is not deleted, Please Try again later...!");
        }
    }
}
