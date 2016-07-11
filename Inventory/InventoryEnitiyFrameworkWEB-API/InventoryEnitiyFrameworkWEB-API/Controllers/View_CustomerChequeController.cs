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
    public class View_CustomerChequeController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_CustomerCheque
        public IQueryable<View_CustomerCheque> GetView_CustomerCheque()
        {
            return db.View_CustomerCheque;
        }

        // GET: api/View_CustomerCheque/5
        [ResponseType(typeof(View_CustomerCheque))]
        public IHttpActionResult GetView_CustomerCheque(int id)
        {
            View_CustomerCheque view_CustomerCheque = db.View_CustomerCheque.Find(id);
            if (view_CustomerCheque == null)
            {
                return NotFound();
            }

            return Ok(view_CustomerCheque);
        }

        // GET: api/View_CustomerCheque?paymentType=cash
        [ResponseType(typeof(View_CustomerCheque))]
        public IHttpActionResult GetView_CustomerCheque(string paymentType)
        {
            View_CustomerCheque[] view_CustomerCheque = db.View_CustomerCheque.Where(vcc => vcc.PaymentType == paymentType).ToArray();
            if (view_CustomerCheque == null)
            {
                return NotFound();
            }

            return Ok(view_CustomerCheque);
        }

        // PUT: api/View_CustomerCheque/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_CustomerCheque(int id, View_CustomerCheque view_CustomerCheque)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_CustomerCheque.Id)
            {
                return BadRequest();
            }

            db.Entry(view_CustomerCheque).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_CustomerChequeExists(id))
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

        // POST: api/View_CustomerCheque
        [ResponseType(typeof(View_CustomerCheque))]
        public IHttpActionResult PostView_CustomerCheque(View_CustomerCheque view_CustomerCheque)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_CustomerCheque.Add(view_CustomerCheque);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_CustomerChequeExists(view_CustomerCheque.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_CustomerCheque.Id }, view_CustomerCheque);
        }

        // DELETE: api/View_CustomerCheque/5
        [ResponseType(typeof(View_CustomerCheque))]
        public IHttpActionResult DeleteView_CustomerCheque(int id)
        {
            View_CustomerCheque view_CustomerCheque = db.View_CustomerCheque.Find(id);
            if (view_CustomerCheque == null)
            {
                return NotFound();
            }

            db.View_CustomerCheque.Remove(view_CustomerCheque);
            db.SaveChanges();

            return Ok(view_CustomerCheque);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_CustomerChequeExists(int id)
        {
            return db.View_CustomerCheque.Count(e => e.Id == id) > 0;
        }
    }
}