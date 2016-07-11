using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryEnitiyFrameworkWEB_API.Models;
namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class SP_CustomerItemWiseDatesController : ApiController
    {
        InventoryEntities inventoryEntities = new InventoryEntities();
        public IEnumerable<SP_CustomerItemWiseDates_Result>Get(DateTime startdate,DateTime enddate,int cust_id,int item_id)
        {
            return inventoryEntities.SP_CustomerItemWiseDates(startdate,enddate,cust_id,item_id).ToArray();
        }
    }
}
