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
    public class View_New_UnitsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_New_Units
        public IQueryable<View_New_Units> GetView_New_Units()
        {
            return db.View_New_Units;
        }

        // GET: api/View_New_Units/5
        [ResponseType(typeof(View_New_Units))]
        public IHttpActionResult GetView_New_Units(int id)
        {
            View_New_Units view_New_Units = db.View_New_Units.Find(id);
            if (view_New_Units == null)
            {
                return NotFound();
            }

            return Ok(view_New_Units);
        }

        // PUT: api/View_New_Units/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_New_Units(int id, View_New_Units view_New_Units)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_New_Units.Id)
            {
                return BadRequest();
            }

            db.Entry(view_New_Units).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_New_UnitsExists(id))
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

        // POST: api/View_New_Units
        [ResponseType(typeof(View_New_Units))]
        public IHttpActionResult PostView_New_Units(View_New_Units view_New_Units)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_New_Units.Add(view_New_Units);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_New_UnitsExists(view_New_Units.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_New_Units.Id }, view_New_Units);
        }

        // DELETE: api/View_New_Units/5
        [ResponseType(typeof(View_New_Units))]
        public IHttpActionResult DeleteView_New_Units(int id)
        {
            View_New_Units view_New_Units = db.View_New_Units.Find(id);
            if (view_New_Units == null)
            {
                return NotFound();
            }

            db.View_New_Units.Remove(view_New_Units);
            db.SaveChanges();

            return Ok(view_New_Units);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_New_UnitsExists(int id)
        {
            return db.View_New_Units.Count(e => e.Id == id) > 0;
        }
    }
}