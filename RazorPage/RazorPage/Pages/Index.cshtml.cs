using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace RazorPage.Pages
{
    public class IndexModel : PageModel
    {

        public List<Book> books;
        public Book Konan = new Book();
        public Book Lem = new Book();
        public Book b2 = new Book();
        public Book b3 = new Book();
        public Book b4 = new Book();

        public void OnGet()
        {

            Konan.Create("Baskervili", "Konan Doil", "detectiv", 99.99, 1);
            Lem.Create("Solaris", "Lem Stanislav", "Fantastic", 9.99, 2);
            b2.Create("TOTOT", "MOROK", "Fantasy", 15, 3, false);
            b3.Create("MOM", "MOROK", "Fantasy", 90, 4);
            b4.Create("LARA", "MOROK", "Fantasy", 20, 5, false);

            books = new List<Book> { Konan, Lem, b2, b3, b4};
        }
    }
}