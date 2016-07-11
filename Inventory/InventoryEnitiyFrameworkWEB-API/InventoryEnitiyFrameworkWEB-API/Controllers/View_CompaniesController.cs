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
    public class View_CompaniesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Companies
        public IQueryable<View_Companies> GetView_Companies()
        {
            return db.View_Companies;
        }

        // GET: api/View_Companies/5
        [ResponseType(typeof(View_Companies))]
        public IHttpActionResult GetView_Companies(int id)
        {
            View_Companies view_Companies = db.View_Companies.Find(id);
            if (view_Companies == null)
            {
                return NotFound();
            }

            return Ok(view_Companies);
        }

        // PUT: api/View_Companies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Companies(int id, View_Companies view_Companies)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Companies.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Companies).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_CompaniesExists(id))
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

        // POST: api/View_Companies
        [ResponseType(typeof(View_Companies))]
        public IHttpActionResult PostView_Companies(View_Companies view_Companies)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Companies.Add(view_Companies);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_CompaniesExists(view_Companies.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Companies.Id }, view_Companies);
        }

        // DELETE: api/View_Companies/5
        [ResponseType(typeof(View_Companies))]
        public IHttpActionResult DeleteView_Companies(int id)
        {
            View_Companies view_Companies = db.View_Companies.Find(id);
            if (view_Companies == null)
            {
                return NotFound();
            }

            db.View_Companies.Remove(view_Companies);
            db.SaveChanges();

            return Ok(view_Companies);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_CompaniesExists(int id)
        {
            return db.View_Companies.Count(e => e.Id == id) > 0;
        }
    }
}