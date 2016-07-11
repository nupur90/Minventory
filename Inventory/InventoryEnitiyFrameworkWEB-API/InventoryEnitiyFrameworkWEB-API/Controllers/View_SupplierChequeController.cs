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
    public class View_SupplierChequeController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_SupplierCheque
        public IQueryable<View_SupplierCheque> GetView_SupplierCheque()
        {
            return db.View_SupplierCheque;
        }

        // GET: api/View_SupplierCheque/5
        [ResponseType(typeof(View_SupplierCheque))]
        public IHttpActionResult GetView_SupplierCheque(int id)
        {
            View_SupplierCheque view_SupplierCheque = db.View_SupplierCheque.Find(id);
            if (view_SupplierCheque == null)
            {
                return NotFound();
            }

            return Ok(view_SupplierCheque);
        }

        // GET: api/View_SupplierCheque/5
        [ResponseType(typeof(View_SupplierCheque))]
        public IHttpActionResult GetView_SupplierCheque(string paymentType)
        {
            View_SupplierCheque[] view_SupplierCheque = db.View_SupplierCheque.Where(vsc=>vsc.PaymentType==paymentType).ToArray();
            if (view_SupplierCheque == null)
            {
                return NotFound();
            }

            return Ok(view_SupplierCheque);
        }

        // PUT: api/View_SupplierCheque/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_SupplierCheque(int id, View_SupplierCheque view_SupplierCheque)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_SupplierCheque.Id)
            {
                return BadRequest();
            }

            db.Entry(view_SupplierCheque).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_SupplierChequeExists(id))
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

        // POST: api/View_SupplierCheque
        [ResponseType(typeof(View_SupplierCheque))]
        public IHttpActionResult PostView_SupplierCheque(View_SupplierCheque view_SupplierCheque)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_SupplierCheque.Add(view_SupplierCheque);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_SupplierChequeExists(view_SupplierCheque.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_SupplierCheque.Id }, view_SupplierCheque);
        }

        // DELETE: api/View_SupplierCheque/5
        [ResponseType(typeof(View_SupplierCheque))]
        public IHttpActionResult DeleteView_SupplierCheque(int id)
        {
            View_SupplierCheque view_SupplierCheque = db.View_SupplierCheque.Find(id);
            if (view_SupplierCheque == null)
            {
                return NotFound();
            }

            db.View_SupplierCheque.Remove(view_SupplierCheque);
            db.SaveChanges();

            return Ok(view_SupplierCheque);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_SupplierChequeExists(int id)
        {
            return db.View_SupplierCheque.Count(e => e.Id == id) > 0;
        }
    }
}