using Domain.ViewModel;
using Microsoft.EntityFrameworkCore;
using Repository_And_Services.Context;
using Repository_And_Services.Repository;
using Repository_And_Services.Services.CustomService.ActorServices;
using Repository_And_Services.Services.CustomService.DirectorServices;
using Repository_And_Services.Services.CustomService.GenresServices;
using Repository_And_Services.Services.CustomService.MovieCastServices;
using Repository_And_Services.Services.CustomService.MovieDirectionServices;
using Repository_And_Services.Services.CustomService.MovieGenresServices;
using Repository_And_Services.Services.CustomService.MovieServices;
using Repository_And_Services.Services.CustomService.RatingServices;
using Repository_And_Services.Services.CustomService.ReviewerServices;
using Repository_And_Services.Services.GenericService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
#region Database Connection 

builder.Services.AddDbContext<MainDBContext>(o=>o.UseSqlServer(builder.Configuration.GetConnectionString("Database")));

#endregion
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region CORS   
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
#endregion

#region  Dependency Injection 
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddTransient(typeof(IService<>), typeof(Service<>));
builder.Services.AddTransient(typeof(IActorService), typeof(ActorService));
builder.Services.AddTransient(typeof(IDirectorService), typeof(DirectorService));
builder.Services.AddTransient(typeof(IGenresService), typeof(GenresService));
builder.Services.AddTransient(typeof(IMovieCastService), typeof(MovieCastService));
builder.Services.AddTransient(typeof(IMovieService), typeof(MovieService));
builder.Services.AddTransient(typeof(IReviewerService), typeof(ReviewerService));
builder.Services.AddTransient(typeof(IMovieDirectionService), typeof(MovieDirectionService));
builder.Services.AddTransient(typeof(IRatingService), typeof(RatingService));
builder.Services.AddTransient(typeof(IMovieGenresService), typeof(MovieGenresService));
#endregion 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(options => options.WithOrigins("http://localhost:3000")
                            .AllowAnyHeader()
                            .AllowAnyMethod());
app.UseAuthorization();

app.MapControllers();

app.Run();
