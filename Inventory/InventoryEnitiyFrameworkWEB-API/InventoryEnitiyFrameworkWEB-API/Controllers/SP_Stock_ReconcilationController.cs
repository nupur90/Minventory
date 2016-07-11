using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;
namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class SP_Stock_ReconcilationController : ApiController
    {
        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<SP_Stock_Reconcilation_Result> Get(int id,DateTime startdate, DateTime enddate)
        {
            return inventoryEntities.SP_Stock_Reconcilation(id,startdate, enddate).ToArray();
        }
    }
}
