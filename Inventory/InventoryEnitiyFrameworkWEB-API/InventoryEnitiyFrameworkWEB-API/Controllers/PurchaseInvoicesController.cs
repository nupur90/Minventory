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
    public class PurchaseInvoicesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/PurchaseInvoices
        public IQueryable<PurchaseInvoice> GetPurchaseInvoices()
        {
            return db.PurchaseInvoices;
        }

        // GET: api/PurchaseInvoices/5
        [ResponseType(typeof(PurchaseInvoice))]
        public IHttpActionResult GetPurchaseInvoice(int id)
        {
            PurchaseInvoice purchaseInvoice = db.PurchaseInvoices.Find(id);
            if (purchaseInvoice == null)
            {
                return NotFound();
            }

            return Ok(purchaseInvoice);
        }

        // PUT: api/PurchaseInvoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPurchaseInvoice(int id, PurchaseInvoice purchaseInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != purchaseInvoice.Id)
            {
                return BadRequest();
            }

            db.Entry(purchaseInvoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PurchaseInvoiceExists(id))
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

        // POST: api/PurchaseInvoices
        [ResponseType(typeof(PurchaseInvoice))]
        public IHttpActionResult PostPurchaseInvoice(PurchaseInvoice purchaseInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PurchaseInvoices.Add(purchaseInvoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = purchaseInvoice.Id }, purchaseInvoice);
        }

        // DELETE: api/PurchaseInvoices/5
        [ResponseType(typeof(PurchaseInvoice))]
        public IHttpActionResult DeletePurchaseInvoice(int id)
        {
            PurchaseInvoice purchaseInvoice = db.PurchaseInvoices.Find(id);
            if (purchaseInvoice == null)
            {
                return NotFound();
            }

            db.PurchaseInvoices.Remove(purchaseInvoice);
            db.SaveChanges();

            return Ok(purchaseInvoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PurchaseInvoiceExists(int id)
        {
            return db.PurchaseInvoices.Count(e => e.Id == id) > 0;
        }
    }
}