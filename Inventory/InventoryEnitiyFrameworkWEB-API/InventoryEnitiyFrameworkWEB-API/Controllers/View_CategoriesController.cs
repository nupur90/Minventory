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
    public class View_CategoriesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Categories
        public IQueryable<View_Categories> GetView_Categories()
        {
            return db.View_Categories;
        }

        // GET: api/View_Categories/5
        [ResponseType(typeof(View_Categories))]
        public IHttpActionResult GetView_Categories(int id)
        {
            View_Categories view_Categories = db.View_Categories.Find(id);
            if (view_Categories == null)
            {
                return NotFound();
            }

            return Ok(view_Categories);
        }

        // PUT: api/View_Categories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Categories(int id, View_Categories view_Categories)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Categories.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Categories).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_CategoriesExists(id))
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

        // POST: api/View_Categories
        [ResponseType(typeof(View_Categories))]
        public IHttpActionResult PostView_Categories(View_Categories view_Categories)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Categories.Add(view_Categories);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Categories.Id }, view_Categories);
        }

        // DELETE: api/View_Categories/5
        [ResponseType(typeof(View_Categories))]
        public IHttpActionResult DeleteView_Categories(int id)
        {
            View_Categories view_Categories = db.View_Categories.Find(id);
            if (view_Categories == null)
            {
                return NotFound();
            }

            db.View_Categories.Remove(view_Categories);
            db.SaveChanges();

            return Ok(view_Categories);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_CategoriesExists(int id)
        {
            return db.View_Categories.Count(e => e.Id == id) > 0;
        }
    }
}