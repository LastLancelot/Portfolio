using Microsoft.AspNetCore.Routing.Constraints;

namespace RazorPage.Pages
{
    public class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public double price { get; set; }
        public int Id { get; set; }
        public bool presentOrNot { get; set; }
        public string show()
        {
            string data =" " + "Name: " + Title;
            data += " " + "Author: " + Author;
            data += " " + "price: " + price;

            return data;
        }
        public void Create(string Name, string _author, string Decrp, double _price, int _id, bool _present = true)
        {
            Title = Name;
            Description = Decrp;
            price = _price;
            Author = _author;
            presentOrNot = _present;
            Id = _id;
        }
        public Book(string title, string author, string description, double price, int id, bool presentOrNot = true)
        {
            Title = title;
            Author = author;
            Description = description;
            this.price = price;
            Id = id;
            this.presentOrNot = presentOrNot;
        }
        public Book()
        {
            Title = "NoName";
            Author = "Unknown";
            Description = "Folk";
            this.price = 1;
            Id = 0;
            this.presentOrNot = false;
        }
    }
}
