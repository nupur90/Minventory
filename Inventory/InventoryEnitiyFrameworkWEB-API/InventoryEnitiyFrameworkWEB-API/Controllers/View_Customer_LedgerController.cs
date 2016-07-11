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
    public class View_Customer_LedgerController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Customer_Ledger
        public IQueryable<View_Customer_Ledger> GetView_Customer_Ledger()
        {
            return db.View_Customer_Ledger;
        }

        // GET: api/View_Customer_Ledger/5
        [ResponseType(typeof(View_Customer_Ledger))]
        public IHttpActionResult GetView_Customer_Ledger(int id)
        {
            View_Customer_Ledger view_Customer_Ledger = db.View_Customer_Ledger.Find(id);
            if (view_Customer_Ledger == null)
            {
                return NotFound();
            }

            return Ok(view_Customer_Ledger);
        }

        // GET: api/View_Customer_Ledger/5
        [ResponseType(typeof(string))]
        //[HttpGet]
        public IHttpActionResult GetView_Customer_LedgerRecord(string paymentType,int id)
        {
            View_Customer_Ledger[] view_Customer_Ledger = db.View_Customer_Ledger.Where(a => a.Id == id && a.PaymentType == paymentType).ToArray();
            if (view_Customer_Ledger == null)
            {
                return NotFound();
            }

            return Ok(view_Customer_Ledger);
        }

        // PUT: api/View_Customer_Ledger/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Customer_Ledger(int id, View_Customer_Ledger view_Customer_Ledger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Customer_Ledger.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Customer_Ledger).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Customer_LedgerExists(id))
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

        // POST: api/View_Customer_Ledger
        [ResponseType(typeof(View_Customer_Ledger))]
        public IHttpActionResult PostView_Customer_Ledger(View_Customer_Ledger view_Customer_Ledger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Customer_Ledger.Add(view_Customer_Ledger);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Customer_LedgerExists(view_Customer_Ledger.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Customer_Ledger.Id }, view_Customer_Ledger);
        }

        // DELETE: api/View_Customer_Ledger/5
        [ResponseType(typeof(View_Customer_Ledger))]
        public IHttpActionResult DeleteView_Customer_Ledger(int id)
        {
            View_Customer_Ledger view_Customer_Ledger = db.View_Customer_Ledger.Find(id);
            if (view_Customer_Ledger == null)
            {
                return NotFound();
            }

            db.View_Customer_Ledger.Remove(view_Customer_Ledger);
            db.SaveChanges();

            return Ok(view_Customer_Ledger);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Customer_LedgerExists(int id)
        {
            return db.View_Customer_Ledger.Count(e => e.Id == id) > 0;
        }
    }
}