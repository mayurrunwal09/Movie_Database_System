using Domain.Model;
using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.ActorServices;
using Repository_And_Services.Services.CustomService.DirectorServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorController : ControllerBase
    {
        private readonly IDirectorService _customerService;
        public DirectorController(IDirectorService customerService)
        {
            _customerService = customerService;
        }

        [Route("GetAllDirector")]
        [HttpGet]
        public async Task<IActionResult> GetAllDirector()
        {
            var res = await _customerService.GetAll();
            if (res == null)
                return BadRequest("No records found");
            return Ok(res);
        }
        [Route("GetDirector")]
        [HttpGet]
        public async Task<IActionResult> GetDirector(int Id)
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
        [Route("InsertDirector")]
        [HttpPost]
        public async Task<IActionResult> InsertDirector(InsertDirector categoryModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _customerService.Insert(categoryModel);
                if (result == true)
                    return Ok("Director Inserted Successfully...!");
                else
                    return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
            }
            else
                return BadRequest("Invalid Category Information, Please Entering a Valid One...!");

        }
        [Route("UpdateDirector")]
        [HttpPut]
        public async Task<IActionResult> UpdateDirector(UpdateDirector categoryModel)
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

        [Route("DeleteDirector")]
        [HttpDelete]
        public async Task<IActionResult> DeleteDirector(int Id)
        {
            var result = await _customerService.Delete(Id);
            if (result == true)
                return Ok("Director Deleted SUccessfully...!");
            else
                return BadRequest("Director is not deleted, Please Try again later...!");
        }
    }
}
