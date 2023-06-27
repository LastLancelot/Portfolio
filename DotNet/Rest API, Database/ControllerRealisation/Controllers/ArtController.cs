using ControllerRealisation.Data.Context;
using ControllerRealisation.Data.Model;
using Microsoft.AspNetCore.Mvc;

namespace ControllerRealisation.Controllers;


[ApiController]
[Route("")]
public class ArtController :ControllerBase
{
    public ArtContext _context;

    public ArtController(ArtContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("api/v1/Art/get-all-arts")]
    public IActionResult GetAll()
    {
        return Ok(_context.Arts);
    }

    [HttpGet]
    [Route("api/v1/Art/get-art/{id}")]
    public IActionResult GetArtById([FromRoute]string id)
    {
        System.Console.WriteLine("Get IT");
        System.Console.WriteLine("id");
        var item = _context.Arts.FirstOrDefault(i => i.Id == id);
        if (item == null)
        {
            return NotFound();
        }
        System.Console.WriteLine(item);
        return Ok(item);
    }
        [HttpPost]
    [Route("api/v1/Art/create-art")]
    public IActionResult Create([FromBody] Art artItem)
    {
        System.Console.WriteLine("Added Art");
        System.Console.WriteLine(artItem);
        _context.AddArtToList(artItem);
        return Ok();
    }
    [HttpPut("api/v1/Art/update-product/{id}")]
    public IActionResult Update([FromRoute] string id, [FromBody] Art artItem)
    {
        var item = _context.Arts.FirstOrDefault(i => i.Id == id);
        System.Console.WriteLine("Update");
        System.Console.WriteLine(id);
        System.Console.WriteLine(artItem);
        if (item == null)
        {
            return NotFound();
        }

        item.Name = artItem.Name;
        item.Price = artItem.Price;
        item.Genre = artItem.Genre;
        item.Amount = artItem.Amount;

        return Ok();
    }
    [HttpDelete("api/v1/Art/delete-art/{id}")]
    public IActionResult Delete([FromRoute] string id)
    {
        System.Console.WriteLine("Deleted");
        System.Console.WriteLine(id);
        var item = _context.Arts.FirstOrDefault(i => i.Id == id);

        if (item == null)
        {
            return NotFound();
        }

        _context.Arts.Remove(item);

        return Ok();
    }
    [HttpPost]
    [Route("api/v1/Art/refresh-art")]
    public IActionResult Refresh([FromBody] string arts)
    {
        System.Console.WriteLine("Refreshing Arts");
        System.Console.WriteLine(arts);
        string[] subs = arts.Split(' ');
        foreach (var item in subs)
        {
            foreach (var art in _context.Arts)
            {
                if (art.Name == item)
                {
                    art.Amount--;
                    if (art.Amount <= 0)
                    {
                        _context.Arts.Remove(art);
                        break;
                    }
                }
            }
        }

        return Ok();
    }
}