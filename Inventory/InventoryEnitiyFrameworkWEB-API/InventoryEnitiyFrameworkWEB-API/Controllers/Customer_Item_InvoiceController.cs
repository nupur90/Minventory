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
    public class Customer_Item_InvoiceController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Customer_Item_Invoice
        public IQueryable<Customer_Item_Invoice> GetCustomer_Item_Invoice()
        {
            return db.Customer_Item_Invoice;
        }

        // GET: api/Customer_Item_Invoice/5
        [ResponseType(typeof(Customer_Item_Invoice))]
        public IHttpActionResult GetCustomer_Item_Invoice(int id)
        {
            Customer_Item_Invoice customer_Item_Invoice = db.Customer_Item_Invoice.Find(id);
            if (customer_Item_Invoice == null)
            {
                return NotFound();
            }

            return Ok(customer_Item_Invoice);
        }

        // PUT: api/Customer_Item_Invoice/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer_Item_Invoice(int id, Customer_Item_Invoice customer_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customer_Item_Invoice.Id)
            {
                return BadRequest();
            }

            db.Entry(customer_Item_Invoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Customer_Item_InvoiceExists(id))
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

        // POST: api/Customer_Item_Invoice
        [ResponseType(typeof(Customer_Item_Invoice))]
        public IHttpActionResult PostCustomer_Item_Invoice(Customer_Item_Invoice customer_Item_Invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Customer_Item_Invoice.Add(customer_Item_Invoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customer_Item_Invoice.Id }, customer_Item_Invoice);
        }

        // DELETE: api/Customer_Item_Invoice/5
        [ResponseType(typeof(Customer_Item_Invoice))]
        public IHttpActionResult DeleteCustomer_Item_Invoice(int id)
        {
            Customer_Item_Invoice customer_Item_Invoice = db.Customer_Item_Invoice.Find(id);
            if (customer_Item_Invoice == null)
            {
                return NotFound();
            }

            db.Customer_Item_Invoice.Remove(customer_Item_Invoice);
            db.SaveChanges();

            return Ok(customer_Item_Invoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Customer_Item_InvoiceExists(int id)
        {
            return db.Customer_Item_Invoice.Count(e => e.Id == id) > 0;
        }
    }
}