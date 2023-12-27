using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.ActorServices;
using Repository_And_Services.Services.CustomService.MovieDirectionServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieDirectionController : ControllerBase
    {
        private readonly IMovieDirectionService _customerService;
        public MovieDirectionController(IMovieDirectionService customerService)
        {
            _customerService = customerService;
        }

        [Route("GetAllMovieDirection")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovieDirection()
        {
            var res = await _customerService.GetAll();
            if (res == null)
                return BadRequest("No records found");
            return Ok(res);
        }

        [Route("GetMovieDirection")]
        [HttpGet]
        public async Task<IActionResult> GetMovieDirection(int Id)
        {
            if (Id != null)
            {
                var result = await _customerService.GetById(Id);
                if (result == null)
                    return BadRequest("No Records Found, Please Try Again After Adding them...!");
                return Ok(result);
            }
            else
                return NotFound("Invalid MovieDirection Id, Please Entering a Valid One...!");

        }
        [Route("InsertMovieDirection")]
        [HttpPost]
        public async Task<IActionResult> InsertMovieDirection(InsertMovieDirection categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Insert(categoryModel);
                if (result == true)
                    return Ok("MovieDirection Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid MovieDirection Information, Please Entering a Valid One...!");

        }
        [Route("UpdateMovieDirection")]
        [HttpPut]
        public async Task<IActionResult> UpdateMovieDirection(UpdateMovieDirection categoryModel)
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
                return BadRequest("Invalid MovieDirection Information, Please Entering a Valid One...!");
        }

        [Route("DeleteMovieDirection")]
        [HttpDelete]
        public async Task<IActionResult> DeleteMovieDirection(int Id)
        {
            var result = await _customerService.Delete(Id);
            if (result == true)
                return Ok("MovieDirection Deleted SUccessfully...!");
            else
                return BadRequest("MovieDirection is not deleted, Please Try again later...!");
        }
    }
}
