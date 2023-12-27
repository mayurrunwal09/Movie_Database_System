using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_And_Services.Services.CustomService.ActorServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
            private readonly IActorService _customerService;
            public ActorController(IActorService customerService)
            {
                _customerService = customerService;
            }

            [Route("GetAllUserType")]
            [HttpGet]
            public async Task<IActionResult> GetAllUserType()
            {
                var res = await _customerService.GetAll();
                if (res == null)
                    return BadRequest("No records found");
                return Ok(res);
            }

            [Route("GetUserType")]
            [HttpGet]
            public async Task<IActionResult> GetUserType(int Id)
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
            [Route("InsertActor")]
            [HttpPost]
            public async Task<IActionResult> InsertActor(InsertActor categoryModel)
            {
                if (ModelState.IsValid)
                {
                    var result = await _customerService.Insert(categoryModel);
                    if (result == true)
                        return Ok("Actor Inserted Successfully...!");
                    else
                        return BadRequest("Something Went Wrong, Actor Is Not Inserted, Please Try After Sometime...!");
                }
                else
                    return BadRequest("Invalid Category Information, Please Entering a Valid One...!");

            }
            [Route("UpdateActor")]
            [HttpPut]
            public async Task<IActionResult> UpdateActor(UpdateActor categoryModel)
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

            [Route("DeleteActor")]
            [HttpDelete]
            public async Task<IActionResult> DeleteActor(int Id)
            {
                var result = await _customerService.Delete(Id);
                if (result == true)
                    return Ok("Actor Deleted SUccessfully...!");
                else
                    return BadRequest("Actor is not deleted, Please Try again later...!");
            }
    }
}
