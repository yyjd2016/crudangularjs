﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUDAngularJS.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }
        
        public string Author { get; set; }
        
        public string Publisher { get; set; }
        
        public string Isbn { get; set; }
    }
}