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
    public class TaxesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Taxes
        public IQueryable<Tax> GetTaxes()
        {
            return db.Taxes;
        }

        // GET: api/Taxes/5
        [ResponseType(typeof(Tax))]
        public IHttpActionResult GetTax(int id)
        {
            Tax tax = db.Taxes.Find(id);
            if (tax == null)
            {
                return NotFound();
            }

            return Ok(tax);
        }

        // PUT: api/Taxes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTax(int id, Tax tax)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tax.Id)
            {
                return BadRequest();
            }

            db.Entry(tax).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxExists(id))
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

        // POST: api/Taxes
        [ResponseType(typeof(Tax))]
        public IHttpActionResult PostTax(Tax tax)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Taxes.Add(tax);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tax.Id }, tax);
        }

        // DELETE: api/Taxes/5
        [ResponseType(typeof(Tax))]
        public IHttpActionResult DeleteTax(int id)
        {
            Tax tax = db.Taxes.Find(id);
            if (tax == null)
            {
                return NotFound();
            }

            db.Taxes.Remove(tax);
            db.SaveChanges();

            return Ok(tax);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaxExists(int id)
        {
            return db.Taxes.Count(e => e.Id == id) > 0;
        }
    }
}