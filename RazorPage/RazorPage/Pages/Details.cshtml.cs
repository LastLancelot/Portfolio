using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Cryptography.X509Certificates;

namespace RazorPage.Pages
{
    public class DetailsModel : PageModel
    {
        
        public Book book { get; set; }
        private Book GetBookById(int Id)
        {
            var book = GetBooks();
            return book.FirstOrDefault(t =>t.Id == Id);
        }
        public void OnGet(int id)
        {

            book = GetBookById(id);

        }
        private List<Book>
            GetBooks()
        {
            return new List<Book>
            {
                new Book("Baskervili", "Konan Doil", "detectiv", 99.99, 1),
                new Book("Solaris", "Lem Stanislav", "Fantastic", 9.99, 2),
                new Book("TOTOT", "MOROK", "Fantasy", 15, 3, false),
                new Book("MOM", "MOROK", "Fantasy", 90, 4),
                new Book("LARA", "MOROK", "Fantasy", 20, 5, false),
            };
        }
    }
}
