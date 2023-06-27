using ControllerRealisation.Data.Model;

namespace ControllerRealisation.Data.Context;

public interface IOrderContext
{
    public void AddArtToList(Order order);
}