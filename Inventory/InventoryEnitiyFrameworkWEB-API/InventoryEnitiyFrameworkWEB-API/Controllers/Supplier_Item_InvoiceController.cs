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
    public class Supplier_Item_InvoiceController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Supplier_Item_Invoice
        public IQueryable<Supplier_Item_Invoice> GetSupplier_Item_Invoice()
        {
            return db.Supplier_Item_Invoice;
        }

        // GET: api/Supplier_Item_Invoice/5
        [ResponseType(typeof(Supplier_Item_Invoice))]
        public IHttpActionResult GetSupplier_Item_Invoice(int id)
        {
            Supplier_Item_Invoice supplier_Item_Invoice = db.Supplier_Item_Invoice.Find(id);
            if (supplier_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(supplier_Item_Invoice);
        }

        // PUT: api/Supplier_Item_Invoice/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSupplier_Item_Invoice(int id, Supplier_Item_Invoice supplier_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplier_Item_Invoice.Id)
            {
                return BadRequest();
            }

            db.Entry(supplier_Item_Invoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Supplier_Item_InvoiceExists(id))
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

        // POST: api/Supplier_Item_Invoice
        [ResponseType(typeof(Supplier_Item_Invoice))]
        public IHttpActionResult PostSupplier_Item_Invoice(Supplier_Item_Invoice supplier_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Supplier_Item_Invoice.Add(supplier_Item_Invoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = supplier_Item_Invoice.Id }, supplier_Item_Invoice);
        }

        // DELETE: api/Supplier_Item_Invoice/5
        [ResponseType(typeof(Supplier_Item_Invoice))]
        public IHttpActionResult DeleteSupplier_Item_Invoice(int id)
        {
            Supplier_Item_Invoice supplier_Item_Invoice = db.Supplier_Item_Invoice.Find(id);
            if (supplier_Item_Invoice == null)
            {
                return NotFound();
            }

            db.Supplier_Item_Invoice.Remove(supplier_Item_Invoice);
            db.SaveChanges();

            return Ok(supplier_Item_Invoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Supplier_Item_InvoiceExists(int id)
        {
            return db.Supplier_Item_Invoice.Count(e => e.Id == id) > 0;
        }
    }
}