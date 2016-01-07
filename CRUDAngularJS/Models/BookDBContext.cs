using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CRUDAngularJS.Models
{
    public class BookDBContext : DbContext
    {
        public BookDBContext() : base(nameOrConnectionString: "MSSQLCONNECT") 
        {
        
        }
        
        public DbSet<Book> books { get; set; }
    }
}