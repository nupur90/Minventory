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
    public class PartyPaymentsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/PartyPayments
        public IQueryable<PartyPayment> GetPartyPayments()
        {
            return db.PartyPayments;
        }

        // GET: api/PartyPayments/5
        [ResponseType(typeof(PartyPayment))]
        public IHttpActionResult GetPartyPayment(int id)
        {
            PartyPayment partyPayment = db.PartyPayments.Find(id);
            if (partyPayment == null)
            {
                return NotFound();
            }

            return Ok(partyPayment);
        }

        // PUT: api/PartyPayments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPartyPayment(int id, PartyPayment partyPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != partyPayment.Id)
            {
                return BadRequest();
            }

            db.Entry(partyPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartyPaymentExists(id))
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

        // POST: api/PartyPayments
        [ResponseType(typeof(PartyPayment))]
        public IHttpActionResult PostPartyPayment(PartyPayment partyPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PartyPayments.Add(partyPayment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = partyPayment.Id }, partyPayment);
        }

        // DELETE: api/PartyPayments/5
        [ResponseType(typeof(PartyPayment))]
        public IHttpActionResult DeletePartyPayment(int id)
        {
            PartyPayment partyPayment = db.PartyPayments.Find(id);
            if (partyPayment == null)
            {
                return NotFound();
            }

            db.PartyPayments.Remove(partyPayment);
            db.SaveChanges();

            return Ok(partyPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PartyPaymentExists(int id)
        {
            return db.PartyPayments.Count(e => e.Id == id) > 0;
        }
    }
}