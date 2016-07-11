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
    public class QuantityAndPricesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/QuantityAndPrices
        public IQueryable<QuantityAndPrice> GetQuantityAndPrices()
        {
            return db.QuantityAndPrices;
        }

        // GET: api/QuantityAndPrices/5
        [ResponseType(typeof(QuantityAndPrice))]
        public IHttpActionResult GetQuantityAndPrice(int id)
        {
            QuantityAndPrice quantityAndPrice = db.QuantityAndPrices.Find(id);
            if (quantityAndPrice == null)
            {
                return NotFound();
            }

            return Ok(quantityAndPrice);
        }

        // PUT: api/QuantityAndPrices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQuantityAndPrice(int id, QuantityAndPrice quantityAndPrice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != quantityAndPrice.Id)
            {
                return BadRequest();
            }

            db.Entry(quantityAndPrice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuantityAndPriceExists(id))
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

        // POST: api/QuantityAndPrices
        [ResponseType(typeof(QuantityAndPrice))]
        public IHttpActionResult PostQuantityAndPrice(QuantityAndPrice quantityAndPrice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.QuantityAndPrices.Add(quantityAndPrice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = quantityAndPrice.Id }, quantityAndPrice);
        }

        // DELETE: api/QuantityAndPrices/5
        [ResponseType(typeof(QuantityAndPrice))]
        public IHttpActionResult DeleteQuantityAndPrice(int id)
        {
            QuantityAndPrice quantityAndPrice = db.QuantityAndPrices.Find(id);
            if (quantityAndPrice == null)
            {
                return NotFound();
            }

            db.QuantityAndPrices.Remove(quantityAndPrice);
            db.SaveChanges();

            return Ok(quantityAndPrice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuantityAndPriceExists(int id)
        {
            return db.QuantityAndPrices.Count(e => e.Id == id) > 0;
        }
    }
}