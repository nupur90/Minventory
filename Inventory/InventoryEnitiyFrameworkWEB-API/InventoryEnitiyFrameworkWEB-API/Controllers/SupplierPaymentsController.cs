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
    public class SupplierPaymentsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/SupplierPayments
        public IQueryable<SupplierPayment> GetSupplierPayments()
        {
            return db.SupplierPayments;
        }

        // GET: api/SupplierPayments/5
        [ResponseType(typeof(SupplierPayment))]
        public IHttpActionResult GetSupplierPayment(int id)
        {
            SupplierPayment supplierPayment = db.SupplierPayments.Find(id);
            if (supplierPayment == null)
            {
                return NotFound();
            }

            return Ok(supplierPayment);
        }

        // PUT: api/SupplierPayments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSupplierPayment(int id, SupplierPayment supplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplierPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(supplierPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierPaymentExists(id))
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

        // POST: api/SupplierPayments
        [ResponseType(typeof(SupplierPayment))]
        public IHttpActionResult PostSupplierPayment(SupplierPayment supplierPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SupplierPayments.Add(supplierPayment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = supplierPayment.Id }, supplierPayment);
        }

        // DELETE: api/SupplierPayments/5
        [ResponseType(typeof(SupplierPayment))]
        public IHttpActionResult DeleteSupplierPayment(int id)
        {
            SupplierPayment supplierPayment = db.SupplierPayments.Find(id);
            if (supplierPayment == null)
            {
                return NotFound();
            }

            db.SupplierPayments.Remove(supplierPayment);
            db.SaveChanges();

            return Ok(supplierPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SupplierPaymentExists(int id)
        {
            return db.SupplierPayments.Count(e => e.Id == id) > 0;
        }
    }
}