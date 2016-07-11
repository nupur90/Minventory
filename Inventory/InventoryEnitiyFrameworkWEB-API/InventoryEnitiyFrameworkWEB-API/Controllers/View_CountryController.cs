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
    public class View_CountryController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Country
        public IQueryable<View_Country> GetView_Country()
        {
            return db.View_Country;
        }

        // GET: api/View_Country/5
        [ResponseType(typeof(View_Country))]
        public IHttpActionResult GetView_Country(int id)
        {
            View_Country view_Country = db.View_Country.Find(id);
            if (view_Country == null)
            {
                return NotFound();
            }

            return Ok(view_Country);
        }

        // PUT: api/View_Country/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Country(int id, View_Country view_Country)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Country.ID)
            {
                return BadRequest();
            }

            db.Entry(view_Country).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_CountryExists(id))
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

        // POST: api/View_Country
        [ResponseType(typeof(View_Country))]
        public IHttpActionResult PostView_Country(View_Country view_Country)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Country.Add(view_Country);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Country.ID }, view_Country);
        }

        // DELETE: api/View_Country/5
        [ResponseType(typeof(View_Country))]
        public IHttpActionResult DeleteView_Country(int id)
        {
            View_Country view_Country = db.View_Country.Find(id);
            if (view_Country == null)
            {
                return NotFound();
            }

            db.View_Country.Remove(view_Country);
            db.SaveChanges();

            return Ok(view_Country);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_CountryExists(int id)
        {
            return db.View_Country.Count(e => e.ID == id) > 0;
        }
    }
}