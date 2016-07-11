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
    public class View_SupplierPaymentController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_SupplierPayment
        public IQueryable<View_SupplierPayment> GetView_SupplierPayment()
        {
            return db.View_SupplierPayment;
        }

        // GET: api/View_SupplierPayment/5
        [ResponseType(typeof(View_SupplierPayment))]
        public IHttpActionResult GetView_SupplierPayment(int id)
        {
            View_SupplierPayment view_SupplierPayment = db.View_SupplierPayment.Find(id);
            if (view_SupplierPayment == null)
            {
                return NotFound();
            }

            return Ok(view_SupplierPayment);
        }

        // GET: api/View_SupplierPayment/5
        [ResponseType(typeof(View_SupplierPayment))]
        public IHttpActionResult GetView_SupplierPayment(string chequeNumber)
        {
            View_SupplierPayment view_SupplierPayment = db.View_SupplierPayment.Where(sp=>sp.ChequeNumber==chequeNumber).SingleOrDefault();
            if (view_SupplierPayment == null)
            {
                return NotFound();
            }

            return Ok(view_SupplierPayment);
        }

        // PUT: api/View_SupplierPayment/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_SupplierPayment(int id, View_SupplierPayment view_SupplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_SupplierPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(view_SupplierPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_SupplierPaymentExists(id))
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

        // POST: api/View_SupplierPayment
        [ResponseType(typeof(View_SupplierPayment))]
        public IHttpActionResult PostView_SupplierPayment(View_SupplierPayment view_SupplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_SupplierPayment.Add(view_SupplierPayment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_SupplierPayment.Id }, view_SupplierPayment);
        }

        // DELETE: api/View_SupplierPayment/5
        [ResponseType(typeof(View_SupplierPayment))]
        public IHttpActionResult DeleteView_SupplierPayment(int id)
        {
            View_SupplierPayment view_SupplierPayment = db.View_SupplierPayment.Find(id);
            if (view_SupplierPayment == null)
            {
                return NotFound();
            }

            db.View_SupplierPayment.Remove(view_SupplierPayment);
            db.SaveChanges();

            return Ok(view_SupplierPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_SupplierPaymentExists(int id)
        {
            return db.View_SupplierPayment.Count(e => e.Id == id) > 0;
        }
    }
}