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
    public class View_StateController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_State
        public IQueryable<View_State> GetView_State()
        {
            return db.View_State;
        }

        // GET: api/View_State/5
        [ResponseType(typeof(View_State))]
        public IHttpActionResult GetView_State(int id)
        {
            View_State view_State = db.View_State.Where(s=>s.ID==id).SingleOrDefault();
            if (view_State == null)
            {
                return NotFound();
            }

            return Ok(view_State);
        }

        // GET: api/View_State/5
        [ResponseType(typeof(View_State))]
        public IHttpActionResult GetView_StateByCountry_ID(int country_Id)
        {
            View_State[] view_State = db.View_State.Where(s => s.Country_ID == country_Id).ToArray();
            if (view_State == null)
            {
                return NotFound();
            }

            return Ok(view_State);
        }
        // PUT: api/View_State/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_State(int id, View_State view_State)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_State.ID)
            {
                return BadRequest();
            }

            db.Entry(view_State).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_StateExists(id))
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

        // POST: api/View_State
        [ResponseType(typeof(View_State))]
        public IHttpActionResult PostView_State(View_State view_State)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_State.Add(view_State);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_StateExists(view_State.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_State.ID }, view_State);
        }

        // DELETE: api/View_State/5
        [ResponseType(typeof(View_State))]
        public IHttpActionResult DeleteView_State(int id)
        {
            View_State view_State = db.View_State.Find(id);
            if (view_State == null)
            {
                return NotFound();
            }

            db.View_State.Remove(view_State);
            db.SaveChanges();

            return Ok(view_State);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_StateExists(int id)
        {
            return db.View_State.Count(e => e.ID == id) > 0;
        }
    }
}