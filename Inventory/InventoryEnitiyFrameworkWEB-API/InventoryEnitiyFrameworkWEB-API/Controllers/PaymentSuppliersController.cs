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
    public class PaymentSuppliersController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/PaymentSuppliers
        public IQueryable<PaymentSupplier> GetPaymentSuppliers()
        {
            return db.PaymentSuppliers;
        }

        // GET: api/PaymentSuppliers/5
        [ResponseType(typeof(PaymentSupplier))]
        public IHttpActionResult GetPaymentSupplier(int id)
        {
            PaymentSupplier paymentSupplier = db.PaymentSuppliers.Find(id);
            if (paymentSupplier == null)
            {
                return NotFound();
            }

            return Ok(paymentSupplier);
        }

        // PUT: api/PaymentSuppliers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPaymentSupplier(int id, PaymentSupplier paymentSupplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != paymentSupplier.Payments_Id)
            {
                return BadRequest();
            }

            db.Entry(paymentSupplier).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentSupplierExists(id))
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

        // POST: api/PaymentSuppliers
        [ResponseType(typeof(PaymentSupplier))]
        public IHttpActionResult PostPaymentSupplier(PaymentSupplier paymentSupplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PaymentSuppliers.Add(paymentSupplier);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PaymentSupplierExists(paymentSupplier.Payments_Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = paymentSupplier.Payments_Id }, paymentSupplier);
        }

        // DELETE: api/PaymentSuppliers/5
        [ResponseType(typeof(PaymentSupplier))]
        public IHttpActionResult DeletePaymentSupplier(int id)
        {
            PaymentSupplier paymentSupplier = db.PaymentSuppliers.Find(id);
            if (paymentSupplier == null)
            {
                return NotFound();
            }

            db.PaymentSuppliers.Remove(paymentSupplier);
            db.SaveChanges();

            return Ok(paymentSupplier);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PaymentSupplierExists(int id)
        {
            return db.PaymentSuppliers.Count(e => e.Payments_Id == id) > 0;
        }
    }
}