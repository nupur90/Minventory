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
    public class StockInHandsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/StockInHands
        public IQueryable<StockInHand> GetStockInHands()
        {
            return db.StockInHands;
        }

        // GET: api/StockInHands/5
        [ResponseType(typeof(StockInHand))]
        public IHttpActionResult GetStockInHand(int id)
        {
            StockInHand stockInHand = db.StockInHands.Find(id);
            if (stockInHand == null)
            {
                return NotFound();
            }

            return Ok(stockInHand);
        }

        // PUT: api/StockInHands/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStockInHand(int id, StockInHand stockInHand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != stockInHand.Id)
            {
                return BadRequest();
            }

            db.Entry(stockInHand).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StockInHandExists(id))
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

        // POST: api/StockInHands
        [ResponseType(typeof(StockInHand))]
        public IHttpActionResult PostStockInHand(StockInHand stockInHand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StockInHands.Add(stockInHand);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = stockInHand.Id }, stockInHand);
        }

        // DELETE: api/StockInHands/5
        [ResponseType(typeof(StockInHand))]
        public IHttpActionResult DeleteStockInHand(int id)
        {
            StockInHand stockInHand = db.StockInHands.Find(id);
            if (stockInHand == null)
            {
                return NotFound();
            }

            db.StockInHands.Remove(stockInHand);
            db.SaveChanges();

            return Ok(stockInHand);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StockInHandExists(int id)
        {
            return db.StockInHands.Count(e => e.Id == id) > 0;
        }
    }
}