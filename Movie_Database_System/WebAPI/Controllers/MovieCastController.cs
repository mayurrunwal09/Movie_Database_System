using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.GenresServices;
using Repository_And_Services.Services.CustomService.MovieCastServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieCastController : ControllerBase
    {
        private readonly IMovieCastService _customerService;
        public MovieCastController(IMovieCastService customerService)
        {
            _customerService = customerService;
        }

        [Route("GetAllMovieCast")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovieCast()
        {
            var res = await _customerService.GetAll();
            if (res == null)
                return BadRequest("No records found");
            return Ok(res);
        }
        [Route("GetMovieCast")]
        [HttpGet]
        public async Task<IActionResult> GetMovieCast(int Id)
        {
            if (Id != null)
            {
                var result = await _customerService.GetById(Id);
                if (result == null)
                    return BadRequest("No Records Found, Please Try Again After Adding them...!");
                return Ok(result);
            }
            else
                return NotFound("Invalid Category Id, Please Entering a Valid One...!");

        }
        [Route("InsertMovieCast")]
        [HttpPost]
        public async Task<IActionResult> InsertMovieCast(InsertMovieCast categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Insert(categoryModel);
                if (result == true)
                    return Ok("MovieCast Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Genres Information, Please Entering a Valid One...!");

        }
        [Route("UpdateMoviecast")]
        [HttpPut]
        public async Task<IActionResult> UpdateMoviecast(UpdateMoviecast categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Update(categoryModel);
                if (result == true)
                    return Ok(categoryModel);
                else
                    return BadRequest("Something Went Wrong, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Actor Information, Please Entering a Valid One...!");
        }

        [Route("DeleteMovieCast")]
        [HttpDelete]
        public async Task<IActionResult> DeleteMovieCast(int Id)
        {
            var result = await _customerService.Delete(Id);
            if (result == true)
                return Ok("Genres Deleted SUccessfully...!");
            else
                return BadRequest("Genres is not deleted, Please Try again later...!");
        }

    }
}
