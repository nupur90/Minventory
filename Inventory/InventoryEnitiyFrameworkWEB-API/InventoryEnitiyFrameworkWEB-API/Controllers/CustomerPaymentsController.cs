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
    public class CustomerPaymentsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/CustomerPayments
        public IQueryable<CustomerPayment> GetCustomerPayments()
        {
            return db.CustomerPayments;
        }

        // GET: api/CustomerPayments/5
        [ResponseType(typeof(CustomerPayment))]
        public IHttpActionResult GetCustomerPayment(int id)
        {
            CustomerPayment customerPayment = db.CustomerPayments.Find(id);
            if (customerPayment == null)
            {
                return NotFound();
            }

            return Ok(customerPayment);
        }

        // PUT: api/CustomerPayments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomerPayment(int id, CustomerPayment customerPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customerPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(customerPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerPaymentExists(id))
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

        // POST: api/CustomerPayments
        [ResponseType(typeof(CustomerPayment))]
        public IHttpActionResult PostCustomerPayment(CustomerPayment customerPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CustomerPayments.Add(customerPayment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customerPayment.Id }, customerPayment);
        }

        // DELETE: api/CustomerPayments/5
        [ResponseType(typeof(CustomerPayment))]
        public IHttpActionResult DeleteCustomerPayment(int id)
        {
            CustomerPayment customerPayment = db.CustomerPayments.Find(id);
            if (customerPayment == null)
            {
                return NotFound();
            }

            db.CustomerPayments.Remove(customerPayment);
            db.SaveChanges();

            return Ok(customerPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerPaymentExists(int id)
        {
            return db.CustomerPayments.Count(e => e.Id == id) > 0;
        }
    }
}