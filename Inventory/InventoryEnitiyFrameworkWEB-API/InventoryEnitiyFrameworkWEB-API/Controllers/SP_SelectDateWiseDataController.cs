using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;

namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class SP_SelectDateWiseDataController : ApiController
    {
        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<SP_SelectDateWiseData_Result> Get(DateTime startDate, DateTime endDate)
        {
            return inventoryEntities.SP_SelectDateWiseData(startDate, endDate).ToArray();
        }
    }
}
