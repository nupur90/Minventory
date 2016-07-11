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
    public class View_PartyPaymentController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_PartyPayment
        public IQueryable<View_PartyPayment> GetView_PartyPayment()
        {
            return db.View_PartyPayment;
        }

        // GET: api/View_PartyPayment/5
        [ResponseType(typeof(View_PartyPayment))]
        public IHttpActionResult GetView_PartyPayment(int id)
        {
            
            View_PartyPayment[] view_PartyPayment = db.View_PartyPayment.Where(pp => pp.Customer_ID == id).ToArray();
            if (view_PartyPayment == null)
            {
                return NotFound();
            }

            return Ok(view_PartyPayment);
        }


        // GET: api/View_Party_LedgerRecord/5?paymentType=cash
        [ResponseType(typeof(View_PartyPayment))]
        public IHttpActionResult GetView_Party_LedgerRecord(string paymentType, int id)
        {
            View_PartyPayment[] view_PartyPayment = db.View_PartyPayment.Where(pp => pp.Customer_ID == id&& pp.PaymentType==paymentType).ToArray();
            if (view_PartyPayment == null)
            {
                return NotFound();
            }

            return Ok(view_PartyPayment);
        }


        // GET: api/View_PartyPayment?paymentType=cash
        [ResponseType(typeof(View_PartyPayment))]
        public IHttpActionResult GetView_Party_LedgerRecord(string paymentType)
        {
            View_PartyPayment[] view_PartyPayment = db.View_PartyPayment.Where(pp=>pp.PaymentType == paymentType).ToArray();
            if (view_PartyPayment == null)
            {
                return NotFound();
            }

            return Ok(view_PartyPayment);
        }


        // PUT: api/View_PartyPayment/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_PartyPayment(int id, View_PartyPayment view_PartyPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_PartyPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(view_PartyPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_PartyPaymentExists(id))
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

        // POST: api/View_PartyPayment
        [ResponseType(typeof(View_PartyPayment))]
        public IHttpActionResult PostView_PartyPayment(View_PartyPayment view_PartyPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_PartyPayment.Add(view_PartyPayment);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_PartyPaymentExists(view_PartyPayment.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_PartyPayment.Id }, view_PartyPayment);
        }

        // DELETE: api/View_PartyPayment/5
        [ResponseType(typeof(View_PartyPayment))]
        public IHttpActionResult DeleteView_PartyPayment(int id)
        {
            View_PartyPayment view_PartyPayment = db.View_PartyPayment.Find(id);
            if (view_PartyPayment == null)
            {
                return NotFound();
            }

            db.View_PartyPayment.Remove(view_PartyPayment);
            db.SaveChanges();

            return Ok(view_PartyPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_PartyPaymentExists(int id)
        {
            return db.View_PartyPayment.Count(e => e.Id == id) > 0;
        }
    }
}