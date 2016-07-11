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
    public class SalesInvoicesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/SalesInvoices
        public IQueryable<SalesInvoice> GetSalesInvoices()
        {
            return db.SalesInvoices;
        }

        // GET: api/SalesInvoices/5
        [ResponseType(typeof(SalesInvoice))]
        public IHttpActionResult GetSalesInvoice(int id)
        {
            SalesInvoice salesInvoice = db.SalesInvoices.Find(id);
            if (salesInvoice == null)
            {
                return NotFound();
            }

            return Ok(salesInvoice);
        }

        // PUT: api/SalesInvoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSalesInvoice(int id, SalesInvoice salesInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != salesInvoice.Id)
            {
                return BadRequest();
            }

            db.Entry(salesInvoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesInvoiceExists(id))
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

        // POST: api/SalesInvoices
        [ResponseType(typeof(SalesInvoice))]
        public IHttpActionResult PostSalesInvoice(SalesInvoice salesInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SalesInvoices.Add(salesInvoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = salesInvoice.Id }, salesInvoice);
        }

        // DELETE: api/SalesInvoices/5
        [ResponseType(typeof(SalesInvoice))]
        public IHttpActionResult DeleteSalesInvoice(int id)
        {
            SalesInvoice salesInvoice = db.SalesInvoices.Find(id);
            if (salesInvoice == null)
            {
                return NotFound();
            }

            db.SalesInvoices.Remove(salesInvoice);
            db.SaveChanges();

            return Ok(salesInvoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SalesInvoiceExists(int id)
        {
            return db.SalesInvoices.Count(e => e.Id == id) > 0;
        }
    }
}