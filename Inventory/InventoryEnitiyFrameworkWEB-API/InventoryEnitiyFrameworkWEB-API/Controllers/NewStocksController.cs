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
    public class NewStocksController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/NewStocks
        public IQueryable<NewStock> GetNewStocks()
        {
            return db.NewStocks;
        }

        // GET: api/NewStocks/5
        [ResponseType(typeof(NewStock))]
        public IHttpActionResult GetNewStock(int id)
        {
            NewStock newStock = db.NewStocks.Find(id);
            if (newStock == null)
            {
                return NotFound();
            }

            return Ok(newStock);
        }

        // PUT: api/NewStocks/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNewStock(int id, NewStock newStock)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != newStock.Id)
            {
                return BadRequest();
            }

            db.Entry(newStock).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewStockExists(id))
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

        // POST: api/NewStocks
        [ResponseType(typeof(NewStock))]
        public IHttpActionResult PostNewStock(NewStock newStock)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NewStocks.Add(newStock);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = newStock.Id }, newStock);
        }

        // DELETE: api/NewStocks/5
        [ResponseType(typeof(NewStock))]
        public IHttpActionResult DeleteNewStock(int id)
        {
            NewStock newStock = db.NewStocks.Find(id);
            if (newStock == null)
            {
                return NotFound();
            }

            db.NewStocks.Remove(newStock);
            db.SaveChanges();

            return Ok(newStock);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NewStockExists(int id)
        {
            return db.NewStocks.Count(e => e.Id == id) > 0;
        }
    }
}