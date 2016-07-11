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
    public class View_BanksController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Banks
        public IQueryable<View_Banks> GetView_Banks()
        {
            return db.View_Banks;
        }

        // GET: api/View_Banks/5
        [ResponseType(typeof(View_Banks))]
        public IHttpActionResult GetView_Banks(int id)
        {
            View_Banks view_Banks = db.View_Banks.Find(id);
            if (view_Banks == null)
            {
                return NotFound();
            }

            return Ok(view_Banks);
        }

        // PUT: api/View_Banks/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Banks(int id, View_Banks view_Banks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Banks.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Banks).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_BanksExists(id))
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

        // POST: api/View_Banks
        [ResponseType(typeof(View_Banks))]
        public IHttpActionResult PostView_Banks(View_Banks view_Banks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Banks.Add(view_Banks);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Banks.Id }, view_Banks);
        }

        // DELETE: api/View_Banks/5
        [ResponseType(typeof(View_Banks))]
        public IHttpActionResult DeleteView_Banks(int id)
        {
            View_Banks view_Banks = db.View_Banks.Find(id);
            if (view_Banks == null)
            {
                return NotFound();
            }

            db.View_Banks.Remove(view_Banks);
            db.SaveChanges();

            return Ok(view_Banks);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_BanksExists(int id)
        {
            return db.View_Banks.Count(e => e.Id == id) > 0;
        }
    }
}