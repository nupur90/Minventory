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
    public class Customer_ViewController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Customer_View
        public IQueryable<Customer_View> GetCustomer_View()
        {
            return db.Customer_View;
        }

        // GET: api/Customer_View/5
        [ResponseType(typeof(Customer_View))]
        public IHttpActionResult GetCustomer_View(int id)
        {
            Customer_View customer_View = db.Customer_View.Find(id);
            if (customer_View == null)
            {
                return NotFound();
            }

            return Ok(customer_View);
        }

        // PUT: api/Customer_View/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer_View(int id, Customer_View customer_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customer_View.Id)
            {
                return BadRequest();
            }

            db.Entry(customer_View).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Customer_ViewExists(id))
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

        // POST: api/Customer_View
        [ResponseType(typeof(Customer_View))]
        public IHttpActionResult PostCustomer_View(Customer_View customer_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Customer_View.Add(customer_View);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Customer_ViewExists(customer_View.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = customer_View.Id }, customer_View);
        }

        // DELETE: api/Customer_View/5
        [ResponseType(typeof(Customer_View))]
        public IHttpActionResult DeleteCustomer_View(int id)
        {
            Customer_View customer_View = db.Customer_View.Find(id);
            if (customer_View == null)
            {
                return NotFound();
            }

            db.Customer_View.Remove(customer_View);
            db.SaveChanges();

            return Ok(customer_View);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Customer_ViewExists(int id)
        {
            return db.Customer_View.Count(e => e.Id == id) > 0;
        }
    }
}