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
    public class View_Supplier_LedgerController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Supplier_Ledger
        public IQueryable<View_Supplier_Ledger> GetView_Supplier_Ledger()
        {
            return db.View_Supplier_Ledger;
        }

        // GET: api/View_Supplier_Ledger/5
        [ResponseType(typeof(View_Supplier_Ledger))]
        public IHttpActionResult GetView_Supplier_Ledger(int id)
        {
            View_Supplier_Ledger[] view_Supplier_Ledger = db.View_Supplier_Ledger.Where(sl=>sl.Supplier_ID==id).ToArray();
            if (view_Supplier_Ledger == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_Ledger);
        }

        // GET: api/View_Supplier_Ledger?paymentType=cashOrCheque
        [ResponseType(typeof(View_Supplier_Ledger))]
        public IHttpActionResult GetView_Supplier_Ledger(string payemntType)
        {
            View_Supplier_Ledger[] view_Supplier_Ledger = db.View_Supplier_Ledger.Where(sl => sl.PaymentType == payemntType).ToArray();
            if (view_Supplier_Ledger == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_Ledger);
        }




        // GET: api/View_Supplier_Ledger/5?paymentType=cashOrCheque
        [ResponseType(typeof(View_Supplier_Ledger))]
        public IHttpActionResult GetView_Supplier_Ledger(string  paymentType,int id)
        {
            View_Supplier_Ledger[] view_Supplier_Ledger = db.View_Supplier_Ledger.Where(sl => sl.Supplier_ID == id && sl.PaymentType==paymentType).ToArray();
            if (view_Supplier_Ledger == null)
            {
                return NotFound();
            }

            return Ok(view_Supplier_Ledger);
        }








        // PUT: api/View_Supplier_Ledger/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Supplier_Ledger(int id, View_Supplier_Ledger view_Supplier_Ledger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Supplier_Ledger.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Supplier_Ledger).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Supplier_LedgerExists(id))
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

        // POST: api/View_Supplier_Ledger
        [ResponseType(typeof(View_Supplier_Ledger))]
        public IHttpActionResult PostView_Supplier_Ledger(View_Supplier_Ledger view_Supplier_Ledger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Supplier_Ledger.Add(view_Supplier_Ledger);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Supplier_LedgerExists(view_Supplier_Ledger.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Supplier_Ledger.Id }, view_Supplier_Ledger);
        }

        // DELETE: api/View_Supplier_Ledger/5
        [ResponseType(typeof(View_Supplier_Ledger))]
        public IHttpActionResult DeleteView_Supplier_Ledger(int id)
        {
            View_Supplier_Ledger view_Supplier_Ledger = db.View_Supplier_Ledger.Find(id);
            if (view_Supplier_Ledger == null)
            {
                return NotFound();
            }

            db.View_Supplier_Ledger.Remove(view_Supplier_Ledger);
            db.SaveChanges();

            return Ok(view_Supplier_Ledger);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Supplier_LedgerExists(int id)
        {
            return db.View_Supplier_Ledger.Count(e => e.Id == id) > 0;
        }
    }
}