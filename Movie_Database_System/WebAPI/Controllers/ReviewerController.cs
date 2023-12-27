using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.MovieServices;
using Repository_And_Services.Services.CustomService.ReviewerServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewerController : ControllerBase
    {
        private readonly IReviewerService _movieService;
        public ReviewerController(IReviewerService movieService)
        {
            _movieService = movieService;
        }

        [Route("GetAllReviewer")]
        [HttpGet]
        public async Task<IActionResult> GetAllReviewer()
        {
            var res = await _movieService.GetAll();
            if (res == null)
                return BadRequest("No Records Found");
            return Ok(res);
        }
        [Route("GetReviewerById")]
        [HttpGet]
        public async Task<IActionResult> GetReviewerById(int Id)
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
        [Route("InsertReviewer")]
        [HttpPost]
        public async Task<IActionResult> InsertReviewer(InsertReviewer categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _movieService.Insert(categoryModel);
                if (result == true)
                    return Ok("Reviewer Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Movie Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Movie Information, Please Entering a Valid One...!");

        }
        [Route("UpdateReviewer")]
        [HttpPut]
        public async Task<IActionResult> UpdateReviewer(UpdateReviewer categoryModel)
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
                return BadRequest("Invalid Reviewer Information, Please Entering a Valid One...!");
        }

        [Route("DeleteReviewer")]
        [HttpDelete]
        public async Task<IActionResult> DeleteReviewer(int Id)
        {
            var result = await _movieService.Delete(Id);
            if (result == true)
                return Ok("Reviewer Deleted SUccessfully...!");
            else
                return BadRequest("Movie is not deleted, Please Try again later...!");
        }
    }
}
