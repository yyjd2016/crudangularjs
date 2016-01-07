using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUDAngularJS.Models;

namespace CRUDAngularJS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetAllBooks()
        {
            using(BookDBContext contextObj = new BookDBContext()) 
            {
                var bookList = contextObj.books.ToList();
                return Json(bookList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetBookById(string id)
        {
            using (BookDBContext contextObj = new BookDBContext()) 
            {
                var bookId = Convert.ToInt32(id);
                var getBookById = contextObj.books.Find(bookId);
                return Json(getBookById, JsonRequestBehavior.AllowGet);
            }
        }

        public string UpdateBook(Book book) 
        {
            if (book != null)
            {
                using (BookDBContext contextObj = new BookDBContext())
                {
                    int bookId = Convert.ToInt32(book.Id);
                    Book _book = contextObj.books.Where(b => b.Id == bookId).FirstOrDefault();
                    _book.Title = book.Title;
                    _book.Author = book.Author;
                    _book.Publisher = book.Publisher;
                    _book.Isbn = book.Isbn;
                    contextObj.SaveChanges();

                    return "Book record updated successfully";
                }
            }
            else 
            {
                return "Invalid book record";
            }
        }

        public string AddBook(Book book) 
        {
            if (book != null)
            {
                using (BookDBContext contextObj = new BookDBContext())
                {
                    contextObj.books.Add(book);
                    contextObj.SaveChanges();
                    return "Book record added successfully";
                }
            }
            else
            {
                return "Invalid book record";
            }
        }


        public string DeleteBook(string bookId)
        {
            if (!String.IsNullOrEmpty(bookId))
            {
                try
                {
                    int _bookId = Int32.Parse(bookId);
                    using (BookDBContext contextObj = new BookDBContext())
                    {
                        var _book = contextObj.books.Find(_bookId);
                        contextObj.books.Remove(_book);
                        contextObj.SaveChanges();
                        return "Selected book record deleted sucessfully";
                    }
                }
                catch (Exception)
                {
                    return "Book details not found";
                }
            }
            else
            {
                return "Invalid operation";
            }
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult AddOrUpdate(string bookTitle, string bookAuthor, string bookPublisher, string bookIsbn) {
            var a = "";
            return this.Index();

        }
    }
}