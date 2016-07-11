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
    public class DeliveryChallansController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/DeliveryChallans
        public IQueryable<DeliveryChallan> GetDeliveryChallans()
        {
            return db.DeliveryChallans;
        }

        // GET: api/DeliveryChallans/5
        [ResponseType(typeof(DeliveryChallan))]
        public IHttpActionResult GetDeliveryChallan(int id)
        {
            DeliveryChallan deliveryChallan = db.DeliveryChallans.Find(id);
            if (deliveryChallan == null)
            {
                return NotFound();
            }

            return Ok(deliveryChallan);
        }

        // PUT: api/DeliveryChallans/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDeliveryChallan(int id, DeliveryChallan deliveryChallan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != deliveryChallan.Id)
            {
                return BadRequest();
            }

            db.Entry(deliveryChallan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliveryChallanExists(id))
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

        // POST: api/DeliveryChallans
        [ResponseType(typeof(DeliveryChallan))]
        public IHttpActionResult PostDeliveryChallan(DeliveryChallan deliveryChallan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DeliveryChallans.Add(deliveryChallan);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = deliveryChallan.Id }, deliveryChallan);
        }

        // DELETE: api/DeliveryChallans/5
        [ResponseType(typeof(DeliveryChallan))]
        public IHttpActionResult DeleteDeliveryChallan(int id)
        {
            DeliveryChallan deliveryChallan = db.DeliveryChallans.Find(id);
            if (deliveryChallan == null)
            {
                return NotFound();
            }

            db.DeliveryChallans.Remove(deliveryChallan);
            db.SaveChanges();

            return Ok(deliveryChallan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DeliveryChallanExists(int id)
        {
            return db.DeliveryChallans.Count(e => e.Id == id) > 0;
        }
    }
}