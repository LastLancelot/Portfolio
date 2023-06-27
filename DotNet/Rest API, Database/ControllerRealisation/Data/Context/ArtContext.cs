using ControllerRealisation.Data.Model;

namespace ControllerRealisation.Data.Context;

public class ArtContext: IArtContext
{
    public List<Art> Arts { get; set; }

    public ArtContext(List<Art> arts)
    {
        Arts = arts;
    }

    public ArtContext()
    {
        Arts = new List<Art>()
        {
            new Art("1", "Paint", "classic", 2900, 3),
            new Art("2", "Skulp", "classic", 390, 2),
            new Art("3", "NFT", "neo", 550, 756),
            new Art("4", "Pics", "classic", 2000, 14),
            new Art("5", "Cube", "classic", 200, 1),
            new Art("6", "Pen", "neo", 450, 4532),
            new Art("7", "Maket", "Barokko", 200, 2),
        };
    }

    public void AddArtToList(Art art)
    {
        Arts.Add(art);
    }
}