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
    public class View_Supplier_PurcchaseIvoice_SupplierPaymentController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Supplier_PurcchaseIvoice_SupplierPayment
        public IQueryable<View_Supplier_PurcchaseIvoice_SupplierPayment> GetView_Supplier_PurcchaseIvoice_SupplierPayment()
        {
            return db.View_Supplier_PurcchaseIvoice_SupplierPayment;
        }

        // GET: api/View_Supplier_PurcchaseIvoice_SupplierPayment/5
        [ResponseType(typeof(View_Supplier_PurcchaseIvoice_SupplierPayment))]
        public IHttpActionResult GetView_Supplier_PurcchaseIvoice_SupplierPayment(int id)
        {
            View_Supplier_PurcchaseIvoice_SupplierPayment view_Supplier_PurcchaseIvoice_SupplierPayment = db.View_Supplier_PurcchaseIvoice_SupplierPayment.Find(id);
            if (view_Supplier_PurcchaseIvoice_SupplierPayment == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_PurcchaseIvoice_SupplierPayment);
        }

        // PUT: api/View_Supplier_PurcchaseIvoice_SupplierPayment/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Supplier_PurcchaseIvoice_SupplierPayment(int id, View_Supplier_PurcchaseIvoice_SupplierPayment view_Supplier_PurcchaseIvoice_SupplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Supplier_PurcchaseIvoice_SupplierPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Supplier_PurcchaseIvoice_SupplierPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Supplier_PurcchaseIvoice_SupplierPaymentExists(id))
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

        // POST: api/View_Supplier_PurcchaseIvoice_SupplierPayment
        [ResponseType(typeof(View_Supplier_PurcchaseIvoice_SupplierPayment))]
        public IHttpActionResult PostView_Supplier_PurcchaseIvoice_SupplierPayment(View_Supplier_PurcchaseIvoice_SupplierPayment view_Supplier_PurcchaseIvoice_SupplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Supplier_PurcchaseIvoice_SupplierPayment.Add(view_Supplier_PurcchaseIvoice_SupplierPayment);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Supplier_PurcchaseIvoice_SupplierPaymentExists(view_Supplier_PurcchaseIvoice_SupplierPayment.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Supplier_PurcchaseIvoice_SupplierPayment.Id }, view_Supplier_PurcchaseIvoice_SupplierPayment);
        }

        // DELETE: api/View_Supplier_PurcchaseIvoice_SupplierPayment/5
        [ResponseType(typeof(View_Supplier_PurcchaseIvoice_SupplierPayment))]
        public IHttpActionResult DeleteView_Supplier_PurcchaseIvoice_SupplierPayment(int id)
        {
            View_Supplier_PurcchaseIvoice_SupplierPayment view_Supplier_PurcchaseIvoice_SupplierPayment = db.View_Supplier_PurcchaseIvoice_SupplierPayment.Find(id);
            if (view_Supplier_PurcchaseIvoice_SupplierPayment == null)
            {
                return NotFound();
            }

            db.View_Supplier_PurcchaseIvoice_SupplierPayment.Remove(view_Supplier_PurcchaseIvoice_SupplierPayment);
            db.SaveChanges();

            return Ok(view_Supplier_PurcchaseIvoice_SupplierPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Supplier_PurcchaseIvoice_SupplierPaymentExists(int id)
        {
            return db.View_Supplier_PurcchaseIvoice_SupplierPayment.Count(e => e.Id == id) > 0;
        }
    }
}