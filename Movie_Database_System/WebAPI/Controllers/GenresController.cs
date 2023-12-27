using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.DirectorServices;
using Repository_And_Services.Services.CustomService.GenresServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IGenresService _customerService;
        public GenresController(IGenresService customerService)
        {
            _customerService = customerService;
        }

        [Route("GetAllGenres")]
        [HttpGet]
        public async Task<IActionResult> GetAllGenres()
        {
            var res = await _customerService.GetAll();
            if (res == null)
                return BadRequest("No records found");
            return Ok(res);
        }
        [Route("GetGenres")]
        [HttpGet]
        public async Task<IActionResult> GetGenres(int Id)
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
        [Route("InsertGenres")]
        [HttpPost]
        public async Task<IActionResult> InsertGenres(InsertGenres categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Insert(categoryModel);
                if (result == true)
                    return Ok("Genres Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Genres Information, Please Entering a Valid One...!");

        }
        [Route("UpdateGenres")]
        [HttpPut]
        public async Task<IActionResult> UpdateGenres(UpdateGenres categoryModel)
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

        [Route("DeleteGenres")]
        [HttpDelete]
        public async Task<IActionResult> DeleteGenres(int Id)
        {
            var result = await _customerService.Delete(Id);
            if (result == true)
                return Ok("Genres Deleted SUccessfully...!");
            else
                return BadRequest("Genres is not deleted, Please Try again later...!");
        }
    }
}
