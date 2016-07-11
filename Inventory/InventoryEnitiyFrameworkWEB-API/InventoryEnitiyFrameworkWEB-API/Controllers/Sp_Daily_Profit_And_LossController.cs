using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;

namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class Sp_Daily_Profit_And_LossController : ApiController
    {

        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<Sp_Daily_Profit_And_Loss_Result> Get(DateTime startdate, DateTime enddate)
        {
            return inventoryEntities.Sp_Daily_Profit_And_Loss(startdate, enddate).ToArray();
        }
    }
}
