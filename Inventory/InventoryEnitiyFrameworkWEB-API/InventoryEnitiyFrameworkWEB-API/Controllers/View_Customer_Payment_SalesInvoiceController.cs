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
    public class View_Customer_Payment_SalesInvoiceController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Customer_Payment_SalesInvoice
        public IQueryable<View_Customer_Payment_SalesInvoice> GetView_Customer_Payment_SalesInvoice()
        {
            return db.View_Customer_Payment_SalesInvoice;
        }

        // GET: api/View_Customer_Payment_SalesInvoice/5
        [ResponseType(typeof(View_Customer_Payment_SalesInvoice))]
        public IHttpActionResult GetView_Customer_Payment_SalesInvoice(int id)
        {
            View_Customer_Payment_SalesInvoice view_Customer_Payment_SalesInvoice = db.View_Customer_Payment_SalesInvoice.Find(id);
            if (view_Customer_Payment_SalesInvoice == null)
            {
                return NotFound();
            }

            return Ok(view_Customer_Payment_SalesInvoice);
        }

        // PUT: api/View_Customer_Payment_SalesInvoice/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Customer_Payment_SalesInvoice(int id, View_Customer_Payment_SalesInvoice view_Customer_Payment_SalesInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Customer_Payment_SalesInvoice.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Customer_Payment_SalesInvoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Customer_Payment_SalesInvoiceExists(id))
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

        // POST: api/View_Customer_Payment_SalesInvoice
        [ResponseType(typeof(View_Customer_Payment_SalesInvoice))]
        public IHttpActionResult PostView_Customer_Payment_SalesInvoice(View_Customer_Payment_SalesInvoice view_Customer_Payment_SalesInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Customer_Payment_SalesInvoice.Add(view_Customer_Payment_SalesInvoice);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Customer_Payment_SalesInvoiceExists(view_Customer_Payment_SalesInvoice.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Customer_Payment_SalesInvoice.Id }, view_Customer_Payment_SalesInvoice);
        }

        // DELETE: api/View_Customer_Payment_SalesInvoice/5
        [ResponseType(typeof(View_Customer_Payment_SalesInvoice))]
        public IHttpActionResult DeleteView_Customer_Payment_SalesInvoice(int id)
        {
            View_Customer_Payment_SalesInvoice view_Customer_Payment_SalesInvoice = db.View_Customer_Payment_SalesInvoice.Find(id);
            if (view_Customer_Payment_SalesInvoice == null)
            {
                return NotFound();
            }

            db.View_Customer_Payment_SalesInvoice.Remove(view_Customer_Payment_SalesInvoice);
            db.SaveChanges();

            return Ok(view_Customer_Payment_SalesInvoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Customer_Payment_SalesInvoiceExists(int id)
        {
            return db.View_Customer_Payment_SalesInvoice.Count(e => e.Id == id) > 0;
        }
    }
}