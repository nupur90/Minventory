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
    public class View_UnitController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Unit
        public IQueryable<View_Unit> GetView_Unit()
        {
            return db.View_Unit;
        }

        // GET: api/View_Unit/5
        [ResponseType(typeof(View_Unit))]
        public IHttpActionResult GetView_Unit(int id)
        {
            View_Unit view_Unit = db.View_Unit.Find(id);
            if (view_Unit == null)
            {
                return NotFound();
            }

            return Ok(view_Unit);
        }

        // PUT: api/View_Unit/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Unit(int id, View_Unit view_Unit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Unit.ID)
            {
                return BadRequest();
            }

            db.Entry(view_Unit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_UnitExists(id))
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

        // POST: api/View_Unit
        [ResponseType(typeof(View_Unit))]
        public IHttpActionResult PostView_Unit(View_Unit view_Unit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Unit.Add(view_Unit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Unit.ID }, view_Unit);
        }

        // DELETE: api/View_Unit/5
        [ResponseType(typeof(View_Unit))]
        public IHttpActionResult DeleteView_Unit(int id)
        {
            View_Unit view_Unit = db.View_Unit.Find(id);
            if (view_Unit == null)
            {
                return NotFound();
            }

            db.View_Unit.Remove(view_Unit);
            db.SaveChanges();

            return Ok(view_Unit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_UnitExists(int id)
        {
            return db.View_Unit.Count(e => e.ID == id) > 0;
        }
    }
}