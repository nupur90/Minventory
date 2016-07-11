using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;
namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class SP_Supplier_Wise_ReportsController : ApiController
    {
        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<SP_Supplier_Wise_Reports_Result> Get(int supplier_id, DateTime startdate, DateTime enddate)
        {
            return inventoryEntities.SP_Supplier_Wise_Reports(supplier_id, startdate, enddate).ToArray();
        }
    }
}
