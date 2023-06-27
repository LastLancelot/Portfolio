using ControllerRealisation.Data.Model;

namespace ControllerRealisation.Data.Context;

public class OrderContext: IOrderContext
{
    public List<Order> Orders { get; set; }
    public OrderContext(List<Order> list)
    {
        Orders = list;
    }
    public OrderContext()
    {
        Orders = new List<Order>() {
            new Order("1",200,"Bread eggs Bread"),
            new Order("2",523,"Something eggs Bread"),
        };
    }

    public void AddArtToList(Order order)
    {
        Orders.Add(order);
    }
    

}