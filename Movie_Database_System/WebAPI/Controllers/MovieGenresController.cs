using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.MovieDirectionServices;
using Repository_And_Services.Services.CustomService.MovieGenresServices;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieGenresController : ControllerBase
    {
        private readonly IMovieGenresService _customerService;
        public MovieGenresController(IMovieGenresService customerService)
        {
            _customerService = customerService;
        }

        [Route("GetAllMovieGenres")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovieGenresn()
        {
            var res = await _customerService.GetAll();
            if (res == null)
                return BadRequest("No records found");
            return Ok(res);
        }

        [Route("GetMovieGenres")]
        [HttpGet]
        public async Task<IActionResult> GetMovieGenres(int Id)
        {
            if (Id != null)
            {
                var result = await _customerService.GetById(Id);
                if (result == null)
                    return BadRequest("No Records Found, Please Try Again After Adding them...!");
                return Ok(result);
            }
            else
                return NotFound("Invalid  MovieGenres Id, Please Entering a Valid One...!");

        }
        [Route("InsertMoviegenres")]
        [HttpPost]
        public async Task<IActionResult> InsertMoviegenres(InsertMoviegenres categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Insert(categoryModel);
                if (result == true)
                    return Ok("Moviegenres Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Moviegenres Information, Please Entering a Valid One...!");

        }
        [Route("UpdateMoviegenres")]
        [HttpPut]
        public async Task<IActionResult> UpdateMoviegenres(UpdateMoviegenres categoryModel)
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
                return BadRequest("Invalid Moviegenres Information, Please Entering a Valid One...!");
        }

        [Route("DeleteMoviegenres")]
        [HttpDelete]
        public async Task<IActionResult> DeleteMoviegenres(int Id)
        {
            var result = await _customerService.Delete(Id);
            if (result == true)
                return Ok("MovieDirection Deleted SUccessfully...!");
            else
                return BadRequest("MovieDirection is not deleted, Please Try again later...!");
        }
    }
}
