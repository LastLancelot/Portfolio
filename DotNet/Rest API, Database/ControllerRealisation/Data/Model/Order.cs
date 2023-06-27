namespace ControllerRealisation.Data.Model;

public class Order
{
    public string Id  { get; set; }
    public double Price { get; set; }
    public string ArtList { get; set; }

    public Order()
    {
        Id = "";
        Price = 0;
        ArtList = "";
    }

    public Order(string id, double price, string list)
    {
        this.Id = id;
        this.Price = price;
        this.ArtList = list;
    }
}