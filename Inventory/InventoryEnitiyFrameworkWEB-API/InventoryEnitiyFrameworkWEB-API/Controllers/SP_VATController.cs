using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;

namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class SP_VATController : ApiController
    {
        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<SP_VAT_Result> Get(DateTime startdate, DateTime enddate)
        {
            return inventoryEntities.SP_VAT(startdate, enddate).ToArray();
        }
    }
}
