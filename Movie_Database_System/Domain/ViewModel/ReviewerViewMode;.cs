using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModel
{
    public  class ReviewerViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string Mobileno { get; set; }
    }
    public class InsertReviewer
    {
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string Mobileno { get; set; }
    }
    public class UpdateReviewer : InsertReviewer
    {
        public int Id { get; set;}              
    }
}
