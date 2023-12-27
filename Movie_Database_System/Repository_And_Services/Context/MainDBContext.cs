using Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository_And_Services.Context
{
    public class MainDBContext : DbContext
    {
        public MainDBContext(DbContextOptions options) : base(options) { }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Director> Directors { get; set; }
        public DbSet<Genres> Genres { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Movie_Cast> movie_Casts { get; set; }
        public DbSet<Movie_Direction> movie_Directions { get; set; }
        public DbSet<Movie_Genres> Movie_Genres { get; set; }
        public DbSet<Rating> Rating { get; set; }
        public DbSet<Reviewer> Reviewers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Genres>()
                .HasOne(d=>d.Movie)
                .WithMany(d=>d.MovieGenres)
                .HasForeignKey(d=>d.MovieId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Movie_Genres>()
                .HasOne(d=>d.Genres)
                .WithMany(d=>d.Movie_Genres)
                .HasForeignKey(d=>d.GenresId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Movie_Direction>()
                .HasOne(d=>d.Movie)
                .WithMany(d=>d.MovieDirection)
                .HasForeignKey(d=>d.MovieId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Movie_Direction>()
                .HasOne(d => d.Directors)
                .WithMany(d => d.Movie_Directions)
                .HasForeignKey(d => d.DirectorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Movie_Cast>()
              .HasOne(mc => mc.Movie)
              .WithMany(m => m.MovieCasts)
              .HasForeignKey(mc => mc.MovieId)
              .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Movie_Cast>()
                .HasOne(mc => mc.Actor)
                .WithMany(g => g.MoviesCast)
                .HasForeignKey(mc => mc.ActorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Rating>()
               .HasOne(r => r.Movie)
               .WithMany(m => m.Ratings)
               .HasForeignKey(r => r.MovieId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Rating>()
                .HasOne(r => r.Reviewer)
                .WithMany(rev => rev.Rating)
                .HasForeignKey(r => r.ReviewerId)
                .OnDelete(DeleteBehavior.Restrict);


        }
    }
}
