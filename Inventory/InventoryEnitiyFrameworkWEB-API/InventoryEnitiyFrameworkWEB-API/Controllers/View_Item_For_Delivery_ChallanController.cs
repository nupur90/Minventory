using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using InventoryEnitiyFrameworkWEB_API.Models;

namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class View_Item_For_Delivery_ChallanController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Item_For_Delivery_Challan
        public IQueryable<View_Item_For_Delivery_Challan> GetView_Item_For_Delivery_Challan()
        {
            return db.View_Item_For_Delivery_Challan;
        }

        // GET: api/View_Item_For_Delivery_Challan/5
        [ResponseType(typeof(View_Item_For_Delivery_Challan))]
        public IHttpActionResult GetView_Item_For_Delivery_Challan(int id)
        {
            View_Item_For_Delivery_Challan view_Item_For_Delivery_Challan = db.View_Item_For_Delivery_Challan.Find(id);
            if (view_Item_For_Delivery_Challan == null)
            {
                return NotFound();
            }

            return Ok(view_Item_For_Delivery_Challan);
        }

        // PUT: api/View_Item_For_Delivery_Challan/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Item_For_Delivery_Challan(int id, View_Item_For_Delivery_Challan view_Item_For_Delivery_Challan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Item_For_Delivery_Challan.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Item_For_Delivery_Challan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Item_For_Delivery_ChallanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/View_Item_For_Delivery_Challan
        [ResponseType(typeof(View_Item_For_Delivery_Challan))]
        public IHttpActionResult PostView_Item_For_Delivery_Challan(View_Item_For_Delivery_Challan view_Item_For_Delivery_Challan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Item_For_Delivery_Challan.Add(view_Item_For_Delivery_Challan);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Item_For_Delivery_ChallanExists(view_Item_For_Delivery_Challan.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Item_For_Delivery_Challan.Id }, view_Item_For_Delivery_Challan);
        }

        // DELETE: api/View_Item_For_Delivery_Challan/5
        [ResponseType(typeof(View_Item_For_Delivery_Challan))]
        public IHttpActionResult DeleteView_Item_For_Delivery_Challan(int id)
        {
            View_Item_For_Delivery_Challan view_Item_For_Delivery_Challan = db.View_Item_For_Delivery_Challan.Find(id);
            if (view_Item_For_Delivery_Challan == null)
            {
                return NotFound();
            }

            db.View_Item_For_Delivery_Challan.Remove(view_Item_For_Delivery_Challan);
            db.SaveChanges();

            return Ok(view_Item_For_Delivery_Challan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Item_For_Delivery_ChallanExists(int id)
        {
            return db.View_Item_For_Delivery_Challan.Count(e => e.Id == id) > 0;
        }
    }
}