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
    public class View_Customer_Item_InvoiceController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Customer_Item_Invoice
        public IQueryable<View_Customer_Item_Invoice> GetView_Customer_Item_Invoice()
        {
            return db.View_Customer_Item_Invoice;
        }

        // GET: api/View_Customer_Item_Invoice/5
        [ResponseType(typeof(View_Customer_Item_Invoice))]
        public IHttpActionResult GetView_Customer_Item_Invoice(int id)
        {
            View_Customer_Item_Invoice view_Customer_Item_Invoice = db.View_Customer_Item_Invoice.Find(id);
            if (view_Customer_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(view_Customer_Item_Invoice);
        }

        // GET: api/View_Customer_Item_Invoice/5
        [ResponseType(typeof(View_Customer_Item_Invoice))]
        public IHttpActionResult GetView_Customer_Item_Invoice(int cust_id,DateTime insertedDate)
        {
            View_Customer_Item_Invoice[] view_Customer_Item_Invoice = db.View_Customer_Item_Invoice.Where(vcii => vcii.Customer_Id == cust_id && vcii.InsertedDate == insertedDate).ToArray();
            if (view_Customer_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(view_Customer_Item_Invoice);
        }

        // PUT: api/View_Customer_Item_Invoice/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Customer_Item_Invoice(int id, View_Customer_Item_Invoice view_Customer_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Customer_Item_Invoice.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Customer_Item_Invoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Customer_Item_InvoiceExists(id))
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

        // POST: api/View_Customer_Item_Invoice
        [ResponseType(typeof(View_Customer_Item_Invoice))]
        public IHttpActionResult PostView_Customer_Item_Invoice(View_Customer_Item_Invoice view_Customer_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Customer_Item_Invoice.Add(view_Customer_Item_Invoice);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Customer_Item_InvoiceExists(view_Customer_Item_Invoice.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Customer_Item_Invoice.Id }, view_Customer_Item_Invoice);
        }

        // DELETE: api/View_Customer_Item_Invoice/5
        [ResponseType(typeof(View_Customer_Item_Invoice))]
        public IHttpActionResult DeleteView_Customer_Item_Invoice(int id)
        {
            View_Customer_Item_Invoice view_Customer_Item_Invoice = db.View_Customer_Item_Invoice.Find(id);
            if (view_Customer_Item_Invoice == null)
            {
                return NotFound();
            }

            db.View_Customer_Item_Invoice.Remove(view_Customer_Item_Invoice);
            db.SaveChanges();

            return Ok(view_Customer_Item_Invoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Customer_Item_InvoiceExists(int id)
        {
            return db.View_Customer_Item_Invoice.Count(e => e.Id == id) > 0;
        }
    }
}