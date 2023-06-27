namespace ControllerRealisation.Data.Model;

public class Art
{
    public string Name { get; set; }
    public string Genre { get; set; }
    public double Price { get; set; }
    public string Id { get; set; }
    public int Amount { get; set; }

    public Art()
    {
        Id = "";
        Name = "none";
        Genre = "none";
        Price = 0.0;
        Amount = 0;
    }

    public Art(string id, string name, string genre, double price, int amount)
    {
        this.Id = id;
        this.Name = name;
        this.Genre = genre;
        this.Price = price;
        this.Amount = amount;
    }
}