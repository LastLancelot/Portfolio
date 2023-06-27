using ControllerRealisation.Data.Context;
using ControllerRealisation.Data.Model;
using Microsoft.AspNetCore.Mvc;

namespace ControllerRealisation.Controllers;

[ApiController]
[Route("")]
public class OrderController : ControllerBase
{
    public OrderContext _context;
    public OrderController(OrderContext context)
    {
        _context = context;
    }
    [HttpGet]
    [Route("api/v1/Order/get-all-orders")]
    public IActionResult getAllOrders()
    {
        return Ok(_context.Orders);
    }
    [HttpDelete("api/v1/Order/delete-order/{id}")]
    public IActionResult Delete([FromRoute] string id)
    {
        System.Console.WriteLine("Deleted");
        System.Console.WriteLine(id);
        var item = _context.Orders.FirstOrDefault(i => i.Id == id);

        if (item == null)
        {
            return NotFound();
        }

        _context.Orders.Remove(item);

        return Ok();
    }
    [HttpPut("api/v1/Orders/update-order/{id}")]
    public IActionResult Update([FromRoute] string id, [FromBody] Order artItem)
    {
        var item = _context.Orders.FirstOrDefault(i => i.Id == id);
        System.Console.WriteLine("Update");
        System.Console.WriteLine(id);
        System.Console.WriteLine(artItem);
        if (item == null)
        {
            return NotFound();
        }

        item.Price = artItem.Price;
        item.ArtList = artItem.ArtList;

        return Ok();
    }
    [HttpPost]
    [Route("api/v1/Order/create-order")]
    public IActionResult Create([FromBody] Order artItem)
    {
        System.Console.WriteLine("Added Product");
        System.Console.WriteLine(artItem);
        _context.AddArtToList(artItem);
        return Ok();
    }
}