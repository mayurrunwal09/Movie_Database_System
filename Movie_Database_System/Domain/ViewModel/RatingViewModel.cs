/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class RatingViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public string FeedBack { get; set; }
    }
    public class InsertRating
    {
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string FeedBack { get; set; }
    }
    public class UpdateRating : InsertRating
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
    }
    public class FeedBackViewModel
    {
        public string ReviewerName { get; set; }
        public string Feedback { get; set; }
    }
}
*//*

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class RatingViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public string FeedBack { get; set; }
    }
    public class InsertRating
    {
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string FeedBack { get; set; }
    }
    public class UpdateRating : InsertRating
    {
        public int Id { get; set; }
      
    }
    public class FeedBackViewModel
    {
        public string ReviewerName { get; set; }
        public string Feedback { get; set; }
        public double ReviewerStar { get; set; }
    }
}
*/




/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class RatingViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public string FeedBack { get; set; }
    }
    public class InsertRating
    {
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string FeedBack { get; set; }
    }
    public class UpdateRating : InsertRating
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
    }
    public class FeedBackViewModel
    {
        public string ReviewerName { get; set; }
        public string Feedback { get; set; }
    }
}
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public class RatingViewModel
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string Movie_Title { get; set; }
        public string Reviewer_Name { get; set; }
        public string FeedBack { get; set; }
    }
    public class InsertRating
    {
        public string Title { get; set; }
        public string Name { get; set; }
        public double ReviewerStar { get; set; }
        public double No_Of_Ratings { get; set; }
        public string FeedBack { get; set; }
    }
    public class UpdateRating : InsertRating
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ReviewerId { get; set; }

    }
    public class FeedBackViewModel
    {
        public string ReviewerName { get; set; }
        public string Feedback { get; set; }
        public double ReviewerStar { get; set; }
    }
}
