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
    public class View_Supplier_Item_InvoiceController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Supplier_Item_Invoice
        public IQueryable<View_Supplier_Item_Invoice> GetView_Supplier_Item_Invoice()
        {
            return db.View_Supplier_Item_Invoice;
        }

        // GET: api/View_Supplier_Item_Invoice/5
        [ResponseType(typeof(View_Supplier_Item_Invoice))]
        public IHttpActionResult GetView_Supplier_Item_Invoice(int id)
        {
            View_Supplier_Item_Invoice view_Supplier_Item_Invoice = db.View_Supplier_Item_Invoice.Find(id);
            if (view_Supplier_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_Item_Invoice);
        }

        // GET: api/View_Supplier_Item_Invoice/5
        [ResponseType(typeof(View_Supplier_Item_Invoice))]
        public IHttpActionResult GetView_Supplier_Item_Invoice(int supplier_Id,DateTime insertedDate)
        {
            View_Supplier_Item_Invoice[] view_Supplier_Item_Invoice = db.View_Supplier_Item_Invoice.Where(vsii => vsii.Supplier_Id == supplier_Id && vsii.InsertedDate == insertedDate).ToArray();
            if (view_Supplier_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_Item_Invoice);
        }

        // PUT: api/View_Supplier_Item_Invoice/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Supplier_Item_Invoice(int id, View_Supplier_Item_Invoice view_Supplier_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Supplier_Item_Invoice.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Supplier_Item_Invoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Supplier_Item_InvoiceExists(id))
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

        // POST: api/View_Supplier_Item_Invoice
        [ResponseType(typeof(View_Supplier_Item_Invoice))]
        public IHttpActionResult PostView_Supplier_Item_Invoice(View_Supplier_Item_Invoice view_Supplier_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Supplier_Item_Invoice.Add(view_Supplier_Item_Invoice);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Supplier_Item_InvoiceExists(view_Supplier_Item_Invoice.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Supplier_Item_Invoice.Id }, view_Supplier_Item_Invoice);
        }

        // DELETE: api/View_Supplier_Item_Invoice/5
        [ResponseType(typeof(View_Supplier_Item_Invoice))]
        public IHttpActionResult DeleteView_Supplier_Item_Invoice(int id)
        {
            View_Supplier_Item_Invoice view_Supplier_Item_Invoice = db.View_Supplier_Item_Invoice.Find(id);
            if (view_Supplier_Item_Invoice == null)
            {
                return NotFound();
            }

            db.View_Supplier_Item_Invoice.Remove(view_Supplier_Item_Invoice);
            db.SaveChanges();

            return Ok(view_Supplier_Item_Invoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Supplier_Item_InvoiceExists(int id)
        {
            return db.View_Supplier_Item_Invoice.Count(e => e.Id == id) > 0;
        }
    }
}